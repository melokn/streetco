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