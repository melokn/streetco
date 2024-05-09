document.getElementById('submit-signup').addEventListener('click', addUser)

function addUser(){
    const user = document.getElementById('user-signup')
    const name = document.getElementById('name-signup')
    const cpf = document.getElementById('cpf-signup')
    const password = document.getElementById('password-signup')

    const userData = {
        user: user.value,
        name: name.value,
        cpf: cpf.value,
        password: password.value
    }

    fetch('http://localhost:3301/adduser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('response was not ok!')
        }
        return response.json();
    })
    .then(data => {
        console.log('Usuário cadastrado!: ', data);
        alert('Usuaŕio cadastrado com sucesso!')
        window.location.href = '/index.html'
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
    });
}
