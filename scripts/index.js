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