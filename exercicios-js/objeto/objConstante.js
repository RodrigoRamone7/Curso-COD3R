// Uma constante quando declarada aponta para um endereço de memória que por sua vez armazena os dados recebidos
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro' // Tal endereço de memória pode armazenar outras informações dentro de seus atributos antes declarados
console.log(pessoa)

// Mas você não pode atribuir para a constante um outro objeto, que por sua vez está apontando para outro endereço de memória
// pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' }

// Ou seja, uma constante pode ter seus atributos alterados, adicionados e excluídos, mas não pode receber outro objeto diferente pois este objeto está apontando para outro endereço de memória que não o da constante, portanto ocorre um erro

Object.freeze(pessoa) // Esta propriedade congela o objeto tornando-o inalterável

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)
//Neste caso o objeto já é criado como um objeto constante inalterável