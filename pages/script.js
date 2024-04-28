const produtos = [];
const image = './img/produto.jpg';


class Produto {
    constructor(nome, descricao, preco) {
        this.image = image
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
        const modalId = `ExemploModalCentralizado${i}`;
        htmlProdutos.innerHTML +=
            `<div class="col-lg-4 col-md-6">
                <div class="card mb-4">
                    <img src="${produto.image}" class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <p class="card-text">Preço: R$${produto.preco}</p>
                        <button type="button" class="btn primary" data-toggle="modal" data-target="#${modalId}">
                            Ver Mais
                        </button>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="TituloModalCentralizado" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="TituloModalCentralizado">${produto.nome}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="mb-4">
                                        <img src="${produto.image}" class="img-thumbnail" alt="${produto.nome}">
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="mb-4">
                                        <p> Preço: R$${produto.preco} </p>
                                        <p> ${produto.descricao} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" class="btn primary">Adicionar Produto</button>
                        </div>
                    </div>
                </div>
            </div>`;
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