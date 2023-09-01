// par nome/valor
const saudacao = 'Olá' // contexto léxico (é o contexto no qual o objeto foi criado, neste caso, em nível de arquivo)

function exec(){
    const saudacao = 'Opa!' // contexto léxico 2 (a variável está definida dentro do contexto de função)
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Predro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua tal',
        numero: '03'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
console.log(cliente.endereco.logradouro)