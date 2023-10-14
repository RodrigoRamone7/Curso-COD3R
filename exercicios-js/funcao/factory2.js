// Factory com parametros
function criarProduto (nomeProduto, precoProduto, desconto = 0){
    function desc (desconto){
        const porcentagem = desconto / 100
        const valorComDesconto = precoProduto - (porcentagem * precoProduto)
        return `R$ ${valorComDesconto}`
    }
    return {
        nome: nomeProduto,
        preco: `R$ ${precoProduto}`,
        desc: `${desconto}%`,
        valorComDesconto: desc(desconto)
        }
    }

console.log(criarProduto("Caneta", 1.99))
console.log(criarProduto("Mouse Gamer", 300, 10))