
function numerosMega(numeros){

    let min = 1;
    let max = 60;
    let numeroAleatorio = () => Math.floor(Math.random()*(max - min + 1)) + min;
    let vezes = numeros
    let jogo = []
    while (vezes > 0){
        let numeroRand = numeroAleatorio()
        jogo.push(numeroRand)
        vezes--
    }
    console.log(jogo)
}

numerosMega(6)
numerosMega(6)