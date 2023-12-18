/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

function calculadora(n1, operacao, n2){
    switch (operacao){
        case "+":
            console.log(n1 + n2)
            break
        case "-":
            console.log(n1 - n2)
            break
        case "*":
            console.log(n1 * n2)
            break
        case "/":
            console.log(n1 / n2)
            break
        default:
            console.log("Operação inválida")
    }
}

calculadora(1, '+', 3)
calculadora(2, '-', 1)
calculadora(5, '*', 3)
calculadora(15, '/', 3)
calculadora(15, 'a', 3)

function calculadora2(n1, op, n2){
    let operacao = op
    let x = n1
    let y = n2
    if (operacao == "+"){
        soma = (x , y) => {
            console.log(n1 + n2)
        }
        soma(x,y)
    }
}
calculadora2(1 , "+", 1)
