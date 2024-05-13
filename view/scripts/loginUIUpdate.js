// VERIFICA SE O USUARIO ESTA LOGADO TODA VEZ QUE A PAGINA CARREGA
function updateUI() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
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
        const option = confirm('Deseja sair da sua conta?')
        if(option){
          localStorage.setItem("isLoggedIn", "false");
          window.location.reload()
        }
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
  