const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')
const path = require('path');
// const isLoggedOn = require('../view/scripts/index')

const app = express();
const port = 3301;

app.use(cors());
app.use(bodyParser.json());


const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'streetcompany'
});

function verificarConexao() {
    pool.query('SELECT 1', (error, results) => {
        if (error) {
            return console.error('Erro ao conectar ao banco de dados:', error);
        }
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    });
    
}

app.post('/adduser', (req, res) => {
    const {username, name, cpf, password } = req.body;
    pool.query('SELECT * FROM tb_users WHERE cpf = ?', [cpf], (error, results) => {
        if (error) {
            console.error('Erro na verificação do usuário:', error);
            return res.status(500).send('Erro ao processar sua requisição');
        }

        if (results.length > 0) {
            return res.status(409).send('Usuário já existe.'); 
        } else {
            pool.query('INSERT INTO tb_users (username, name, cpf, password) VALUES (?, ?, ?, ?)',
                [username, name, cpf, password], (error, results) => {
                    if (error) {
                        console.error('Erro ao adicionar usuário:', error);
                        return res.status(500).send('Erro ao processar sua requisição');
                    }
                    res.status(201).json({ id: results.insertId, ...req.body });
                });
        }
    });
});
app.post('/loginverify', (req, res) =>{
    const {username, password} = req.body;
    pool.query('SELECT * FROM tb_users WHERE username = ?', [username], (error, results)=>{
        if(error){
            console.error('Erro ao fazer login:', error);
            return res.status(500).send('Erro ao processar sua requisição')
        }
        if(results.length > 0){
            results.forEach(element =>{
                if(element.username == username && element.password == password){
                    res.status(201).send('Logado com sucesso!')
                    return;
                }else{
                    res.status(500).send('Usuário ou senha incorretos.')
                }
            })
        }else{
            res.status(500).send('Usuário não encontrado')
        }
    })
})

app.get('/getcatalog', (req, res) => {
    pool.query('SELECT * FROM tb_products', (error, results) =>{
        if(error){
            console.error('Erro ao buscar produtos:', error);
            return res.status(500).send('Erro ao processar sua requisição')
        }
        res.status(200).send(results)
    })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    verificarConexao();
});
