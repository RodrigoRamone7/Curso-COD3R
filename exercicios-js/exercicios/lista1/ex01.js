// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function operacoes(x, y) {
    let n1 = x
    let n2 = y
    console.log(`A soma de ${n1} e ${n2} é igual a: ${n1 + n2}`)
    console.log(`A subtração de ${n1} e ${n2} é igual a: ${n1 - n2}`)
    console.log(`A multiplicação de ${n1} e ${n2} é igual a: ${n1 * n2}`)
    console.log(`A divisão de ${n1} e ${n2} é igual a: ${n1 / n2}`)
    console.log("")
}

operacoes(1, 1)
operacoes(5, 7)
operacoes(7, 5)