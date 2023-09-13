function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // operador de comparação bit a bit que precisa ser convertido em bolean por meio da negação (!!)
    const comprarTv32 = trabalho1 != trabalho2 // também funciona para ou exlusivo pois se for diferente receberá true
    const materSaudavel = !comprarSorvete // será a negação

    return { comprarSorvete, comprarTv50, comprarTv32, materSaudavel } // no ecma script 2015 é possível criar chaves de forma mais inteligente, não sendo nescessário ter um par de chave e valor. O nome do valor recebido será a chave do valor.
}
console.log('Caso 1')
console.log(compras(true, true))
console.log('Caso 2')
console.log(compras(false, true))
console.log('Caso 3')
console.log(compras(true, false))
console.log('Caso 4')
console.log(compras(false, false))