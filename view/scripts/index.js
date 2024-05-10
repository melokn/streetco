// CODIGO DA ANIMACAO DO DROPDOWN DA LANDINGPAGE
document.getElementById("dropdown-menu").addEventListener("click", (ev) => {
  ev.preventDefault;
  const pages = document.getElementById("animation-space");
  const dropdown = document.getElementById("dropdown-menu");
  pages.classList.toggle("hidden");
  dropdown.classList.add("rotate");
  setTimeout(function () {
    dropdown.classList.remove("rotate");
  }, 500);
});

//CÓDIGO DROPDOWN DO CATÁLOGO
document.getElementById("catalog-dropdown").addEventListener("click", (ev) => {
  ev.preventDefault();
  console.log("clico");
  const dropdownContent = document.getElementById("catalog-content");
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
});

// VERIFICA SE O USUARIO ESTA LOGADO TODA VEZ QUE A PAGINA CARREGA
function updateUI() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "true") {
    const linkIndex = document.getElementById("link-index");
    linkIndex.href = "./index.html";

    const linkAbout = document.getElementById("link-about");
    linkAbout.href = "./view/templates/about.html";

    const buttons = document.querySelectorAll("#catalog-content button");

    buttons.forEach(function (button) {
      button.removeAttribute("disabled");
    });
    const divLogin = document.getElementById("login");
    const cartButton = document.createElement("button");
    cartButton.id = "cartButton";
    cartButton.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
    const exitButton = document.createElement("button");
    exitButton.id = "exitButton";
    exitButton.innerHTML = '<i class="fa-solid fa-right-from-bracket"></i>';
    //SAIR DA CONTA
    exitButton.addEventListener("click", (ev) => {
      ev.preventDefault();
      localStorage.setItem("isLoggedIn", "false");
      window.location.reload()
    });
    if (divLogin && divLogin.firstElementChild) {
      divLogin.firstElementChild.remove();
    } else {
      console.log("Nenhum elemento filho para remover");
    }

    divLogin.append(cartButton, exitButton);
  }
}
document.addEventListener("DOMContentLoaded", updateUI);
