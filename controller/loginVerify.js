
const linkIndex = document.getElementById('link-index');
linkIndex.href = './index.html'
    
const linkAbout = document.getElementById('link-about')
linkAbout.href = './view/templates/about.html'

const buttons = document.querySelectorAll('#catalog-content button');

buttons.forEach(function(button) {
    button.removeAttribute('disabled');
});
const divLogin = document.getElementById('login')
const cartButton = document.createElement('button')
cartButton.id = 'cartButton'
cartButton.innerText = '<i class="fa-solid fa-cart-shopping"></i>'
divLogin.removeChild(divLogin.firstChild)
divLogin.appendChild(cartButton)