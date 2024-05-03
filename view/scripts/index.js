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

//VERIFICA SE USUÁRIO ESTÁ LOGADO:
let isLoggedOn = false;
function verifyLogin(){
    if (isLoggedOn){
        const linkIndex = document.getElementById('link-index');
        linkIndex.href = './index.html'

        const linkAbout = document.getElementById('link-about')
        linkAbout.href = './view/templates/about.html'
        
        const buttons = document.querySelectorAll('#catalog-content button');

        buttons.forEach(function(button) {
            button.removeAttribute('disabled');
        });
    }
}