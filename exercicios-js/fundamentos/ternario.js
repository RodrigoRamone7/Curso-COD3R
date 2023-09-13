const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(10))

// é a mesma coisa que

function result(nota){
    if (nota >= 7){
        return 'Aprovado'
    }
    else{
        return 'Reprovado'
    }
}

console.log(result(6))