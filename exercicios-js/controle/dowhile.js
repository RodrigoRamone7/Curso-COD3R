function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao  // a estrutura do/while também permite que a variável inicie sem valor atribuído

do { //desta forma, ele garante que a senteça será executada pelo menos uma vez antes de entrar no laço
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while(opcao != -1) // é a única estrutura onde a expressão estará depois do bloco de código a ser executado

console.log('Até a próxima!')