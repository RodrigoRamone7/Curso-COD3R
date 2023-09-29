const soma = function (x, y) {
    return x + y
}

const multiplicacao = (x, y) => x * y

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao (a, b))
}

imprimirResultado(3, 4)
imprimirResultado(2, 5, multiplicacao)
imprimirResultado(2, 2, function(x, y){
    return x - y
})
imprimirResultado(6, 3, (x, y) => x / y)

const pessoa = {
    falar: function() {
        console.log('Opa')
    },
    ola(){
        console.log('Ola')
    }
}

pessoa.falar()
pessoa.ola()

// Todas essas funções são exemplos de funções anônimas pois nenhuma delas tem nome, mas sim, estão armazenadas dentro de variáveis, objetos ou até mesmo escritas diretamente dentro de chamadas de funções.