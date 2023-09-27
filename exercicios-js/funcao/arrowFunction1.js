let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Quando houver apenas um parametro, não há necessidade de bota-lo entre parenteses e a função terá retorno inplícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // O _ é um parâmetro, porém, o JS não te obriga a colocar um parâmetro
console.log(ola())