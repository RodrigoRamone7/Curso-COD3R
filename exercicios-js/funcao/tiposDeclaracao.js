// Function declaration; A vantagem de utilizar esta forma é que o interpretador vai carregar a função antes mesmo de executar o código. Fazendo com que a função possa ser chamada antes de sua declaração na estrutura de código.
function soma(x, y){
    return x + y
}

// Function expression, função anonima dentro de variável
const sub = function (x, y){
    return x - y
}

// Named function expression, função nomeada dentro de variável
const mult = function mult(x, y) {
    return x * y
}

