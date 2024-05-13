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
//DIRECIONA PARA O CATÁLOGO

//ALTERA A PERMISSÃO DAS ANCORAS

function updateIndexUI() {
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
  }
}
document.addEventListener("DOMContentLoaded", updateIndexUI);

//Adicona ancora ao catalogo
const catalogButton = document.querySelectorAll(".catalogButton");
catalogButton.forEach((button) => {
  button.addEventListener("click", (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    window.location.href = "/view/templates/catalog.html";
  });
});
