function soma() {
    let soma = 0
    for (i in arguments){ // O recurso arguments é utilizado para que a função identifique os argumentos mesmo que estes não tenham sido declarados anteriormente na função.
        soma += arguments[i] // Desta forma os argumentos virão como um array e o for será utilizado para localizar o seu índice.
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, 'Teste'))
console.log(soma('a', 'b', 'c'))