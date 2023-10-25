let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return (
        console.log(`Você quebrou ${qtdQuebraDeRecords} recordes e seu pior pontuação foi no jogo de número ${piorJogo}`),
        console.log(`Sua maior pontuação foi de ${maiorPontuacao} pontos`),
        console.log(`Sua menor pontuação foi de ${menorPontuacao} pontos`)
        )
}
 
avaliaPontuacoes(stringPontuacoes)