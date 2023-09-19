const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas){ // a variável i, vai receber o valor do índice do array notas
    console.log(i, notas[i])
}

const pessoa ={
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa){ // é preferível que se use o let para que a variável não fique fora do contexto do for
    console.log(`${atributo} = ${pessoa[atributo]}`)
}