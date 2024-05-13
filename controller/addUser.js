
function addUser(){
    const username = document.getElementById('user-signup')
    const name = document.getElementById('name-signup')
    const cpf = document.getElementById('cpf-signup')
    const password = document.getElementById('pwd-signup')

    const userData = {
        username: username.value,
        name: name.value,
        cpf: cpf.value,
        password: password.value
    }
    console.log(userData)
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
        document.getElementById('user-signup').classList.add('incorrect')   
        document.getElementById('name-signup').classList.add('incorrect')
        document.getElementById('cpf-signup').classList.add('incorrect')
        document.getElementById('pwd-signup').classList.add('incorrect')
    });
}

document.getElementById('submit-signup').addEventListener('click', ev =>{
    ev.preventDefault()
    addUser()

})
    console.log('merda')