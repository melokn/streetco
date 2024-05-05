
// CODIGO DA ANIMACAO DO DROPDOWN DA LANDINGPAGE
document.getElementById('dropdown-menu').addEventListener('click', ev =>{
    ev.preventDefault
    const pages = document.getElementById('animation-space')
    const dropdown = document.getElementById('dropdown-menu')
    pages.classList.toggle('hidden')
    dropdown.classList.add('rotate');
    setTimeout(function() {
        dropdown.classList.remove('rotate');
    }, 500); 
})

//CÓDIGO DROPDOWN DO CATÁLOGO
document.getElementById('catalog-dropdown').addEventListener('click', ev =>{
    ev.preventDefault()
    console.log('clico')
    const dropdownContent = document.getElementById('catalog-content')
    if (dropdownContent.style.display === 'none'){
        dropdownContent.style.display = 'block'
    }else{
        dropdownContent.style.display = 'none'
    }

})

//MUDA A PAGINA PARA AS CONIGURAÇÕES DO USUARIO LOGADO:
// document.getElementById('submit-login').addEventListener('click', ev =>{
//     ev.preventDefault()
//         const linkIndex = document.getElementById('link-index');
//         linkIndex.href = './index.html'
    
//         const linkAbout = document.getElementById('link-about')
//         linkAbout.href = './view/templates/about.html'
        
//         const buttons = document.querySelectorAll('#catalog-content button');
    
//         buttons.forEach(function(button) {
//             button.removeAttribute('disabled');
//         });
//         const divLogin = document.getElementById('login')
//         const cartButton = document.createElement('button')
//         cartButton.id = 'cartButton'
//         cartButton.innerText = '<i class="fa-solid fa-cart-shopping"></i>'
//         divLogin.removeChild(divLogin.firstChild)
//         divLogin.appendChild(cartButton)
//         console.log('chegou aqui')
        
//         console.log('aqui tb')
//     }
// )

