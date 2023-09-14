const imprimirResultado = (nota, nome) =>{
    if (nota >= 7){
        console.log(nome)
        console.log('Aprovado!')
    } else{
        console.log(nome)
        console.log('Reprovado.')
    }
}

imprimirResultado(5, 'Rodrigo')