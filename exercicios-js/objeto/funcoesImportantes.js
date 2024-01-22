const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // Tal função serve para definir um conjunto de par chave/valor com propriedades personalizadas. No caso da definição abaixo, a priedade não pode ser reescrita e está listada no conjunto de pares chave/valor
    enumerable: true, // Caso esta propriedade esteja como false, ela não vai aparecer na listagem do objeto, mas ainda pode ser acessada por meio do nome da chave.
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

// Object.assing (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(dest, obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)