// novo recurso do ecma script 2015

const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
// Caso a estrutura que deseja acessar não esteja setada, este acesso dará erro (ex: se o endereço não existir dentro do objeto)