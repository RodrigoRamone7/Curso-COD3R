// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log('s1 - ' + soma1())
console.log('s1 - ' + soma1(3))
console.log('s1 - ' + soma1(1,2,3))
console.log('s1 - ' + soma1(0,0,0)) // Quando a função receber 0, o valor será falso gerando um bug na aplicação

// estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // Assim qualquer coisa diferente de undefined receberá a, se não recebe 1
    b = 1 in arguments ? b : 1 // Se há argumentos no iníce 1 recebe b, se não recebe 1
    c = isNaN(c) ? 1 : c // Se C for NaN recebe 1, se não recebe C
    // Essa última forma é a mais indicada pois se queremos somar, o ideal é que o valor não receba caracteres não numéricos
    return a + b + c
}

console.log('s2 - ' + soma2())
console.log('s2 - ' + soma2(3))
console.log('s2 - ' + soma2(1,2,3))
console.log('s2 - ' + soma2(0,0,0))

// Valor padrão ES2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log('s3 - ' + soma3())
console.log('s3 - ' + soma3(3))
console.log('s3 - ' + soma3(1,2,3))
console.log('s3 - ' + soma3(0,0,0))