/* 
Aluno: Felipe Silva Bertevello
*/

var produtos = [
    {
    nomeDoProduto: "Televisão 40 polegadas",
    valorDoProduto: 700,
    qualidadeDoProduto: 65,
    statusDoProduto: true
    },
    {
    nomeDoProduto: "Ar Condicionado Split",
    valorDoProduto: 1500,
    qualidadeDoProduto: 90,
    statusDoProduto: false
    },
    {
    nomeDoProduto: "Geladeira Invertida",
    valorDoProduto: 2200,
    qualidadeDoProduto: 40,
    statusDoProduto: true
    },
    {
    nomeDoProduto: "Máquina de Lavar Louças",
    valorDoProduto: 1300,
    qualidadeDoProduto: 80,
    statusDoProduto: true
    }
];

var carrinhoDeCompras = produtos.filter((itens) =>{
    return itens.valorDoProduto >= 482 &&
           itens.valorDoProduto <= 1600 &&
           itens.qualidadeDoProduto > 60 &&
           itens.statusDoProduto === true
})

var listarCarrinhoDeCompras = carrinhoDeCompras.map((itens) => (`\nProduto: ${itens.nomeDoProduto}\nPreço: R$ ${itens.valorDoProduto}\n`));

var somarValorTotal = carrinhoDeCompras.reduce((valorInicial, valorAtual) => {
    return valorInicial + valorAtual.valorDoProduto
}, 0)

console.log(`\nOs itens do seu carrinho de compras são:\n${listarCarrinhoDeCompras}\n\nO valor total de suas compras é de R$ ${somarValorTotal}.`);