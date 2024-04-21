const produtos = [];
const image = './img/produto.jpg';

class Produto {
    constructor(nome, descricao, preco) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }
}

function add(nome, descricao, preco) {
    const produto = new Produto(nome, descricao, preco);
    produtos.push(produto);
}

function ShowProdutos() {
    const htmlProdutos = document.getElementById("produtos");
    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        htmlProdutos.innerHTML +=
            `<div class="col-lg-4 col-md-6">
            <div class="card mb-4">
                <img src="${image}" class="card-img-top" alt="${produto.nome}">
                <div class="card-body">
                    <h5 class="card-title">${produto.nome}</h5>
                    <p class="card-text">${produto.descricao}</p>
                    <p class="card-text">Preço: R$${produto.preco}</p>
                    <a href="#" class="btn btn-primary">Selecionar</a>
                </div>
            </div>
        </div>`
    }
}

add("Produto 1", "Descrição do produto 1", 100);
add("Produto 2", "Descrição do produto 2", 200);
add("Produto 3", "Descrição do produto 3", 300);
add("Produto 4", "Descrição do produto 4", 400);
add("Produto 5", "Descrição do produto 5", 500);
add("Produto 6", "Descrição do produto 6", 600);
add("Produto 7", "Descrição do produto 7", 700);
ShowProdutos();