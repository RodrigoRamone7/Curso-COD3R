let valor //Não inicializada
console.log(valor)

valor = null
console.log(valor)//Ausência de valor
// console.log(valor.toString()) vai dar erro pois não há como ler uma string de um valor nulo

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite a utilização de undefined, deixe que a linguagem defina o que é undefined dentro do código
console.log(!!produto.preco)
// delete produto.preco servirá para retirar o atributo de dentro do obejto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)