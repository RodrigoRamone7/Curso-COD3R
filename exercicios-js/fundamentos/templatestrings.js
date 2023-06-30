const nome = 'Rebeca'
const concat = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concat, template)

//exressões..
console.log(`1+1 = ${1+1}`)

const up = s => s.toUpperCase()

console.log(`Ei.. ${up('cuidado')}!`)