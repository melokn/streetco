function loginVerify (){
    console.log('chegou na funcao')
    const username = document.getElementById('user-login')
    const password = document.getElementById('pwd-login')

    const loginData = {
        username: username.value,
        password: password.value
    }

    fetch('http://localhost:3301/loginverify', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(loginData),
    })
    .then(response => {
        if(!response.ok){
            throw new Error('response was not ok!')
        }
        return response;
    })
    .then(data => {
        console.log('Usuário logado: ', data);
        alert('Usuario logado com sucesso!')
        localStorage.setItem('isLoggedIn', 'true');
        console.log('esta logado')
        window.location.href = '/index.html'
    })
    .catch(error => {
        console.error('Erro ao cadastrar:', error);
        document.getElementById('user-login').classList.add('incorrect')
        document.getElementById('pwd-login').classList.add('incorrect')
    });
}

document.getElementById('submit-login').addEventListener('click', ev => {
    ev.preventDefault()
    loginVerify()
    console.log('voce clicou bebe')
})
