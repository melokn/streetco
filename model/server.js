const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser')

const app = express();
const port = 3306;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))

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
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/../index.html');
});
app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/../view/templates/about.html')
})
app.get('/catalog', (req, res) =>{
    res.sendFile(__dirname + '/../view/templates/catalog.html')
})
app.get('/login', (req, res) =>{
    res.sendFile(__dirname + '/../view/templates/login.html')
})
app.get('/signup', (req, res) =>{
    res.sendFile(__dirname, + '/../view/templates/signup.html')
})
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    verificarConexao();
});
