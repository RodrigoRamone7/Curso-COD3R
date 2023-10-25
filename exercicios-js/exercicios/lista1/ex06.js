//06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(cInicial, tJuros, tempo){
    const montante = cInicial+cInicial*tJuros*tempo
    const juros = tJuros*100
    return console.log(`Seu investimento de R$ ${cInicial.toFixed(2).replace('.', ',')} em juros simples por ${tempo} meses a ${juros.toFixed()}% é de: R$ ${montante.toFixed(2).replace('.', ',')}`)
}

function jurosComposto(cInicial, tJuros, tempo){
    const montante = cInicial*(1+tJuros)**tempo
    const juros = tJuros*100
    return console.log(`Seu investimento de R$ ${cInicial.toFixed(2).replace('.', ',')} em juros compostos por ${tempo} anos a ${juros.toFixed()}% é de: R$ ${montante.toFixed(2).replace('.',',')}`)
}

jurosComposto(1400,0.07,2)
jurosSimples(1400,0.07,24)

jurosSimples(400,0.05,4)