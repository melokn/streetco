
let produtos = []
document.addEventListener('DOMContentLoaded', ev => {
    ev.preventDefault()
    console.log('na funcao');
    fetch('http://localhost:3301/getcatalog')
    .then(response => response.json())
    .then(dados => {
        produtos = dados;
        mostraProdutos(produtos);
    })
    .catch(error =>{
        console.error(error)
        throw new Error("erro na requisição: " + error)
    })
});

function mostraProdutos(produtos) {
    console.log(produtos)
    const container = document.getElementById('container-cards');
    produtos.forEach(produto => {
        console.log(produto);
        
        const divCard = document.createElement('div');
        divCard.className = "card";

        const divImage = document.createElement('div');
        divImage.className = "card-image";
        const img = document.createElement('img')
        img.src = produto.path
        divImage.append(img)

        const buttonCart = document.createElement('button');
        buttonCart.className="add-to-cart";
        buttonCart.innerHTML=`<i class="fa-solid fa-cart-shopping"></i>`;

        const divDesc = document.createElement('div');
        divDesc.className = "card-desc";
        const productDesc = document.createElement('p');
        productDesc.innerText = produto.model; // Assumindo que 'model' é uma propriedade dos produtos

        divDesc.append(productDesc);
        divCard.append(divImage, buttonCart, divDesc); // Adicionando divDesc aqui
        container.append(divCard);
    });
}
