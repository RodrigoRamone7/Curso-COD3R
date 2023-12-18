/*
Notas presentes no caixa:
100, 50, 10, 5 e 1

algoritmo contador:
1 - receber valor
2 - criar variáveis contadoras
3 - loop while para validar se o valor é maior que 100
4 - enquanto o valor for maior que 100
5 - subtrair 100 da variável valor
6 - repetir passo 4 e 5 para as demais notas
7 - imprimir quantidades de cada nota, contados pelas variáveis contadoras

algoritmo:
1 - 
*/

function sacarDinheiro(valor){
    let notas100 = 0
    let notas50 = 0
    let notas10 = 0
    let notas5 = 0
    let notas1 = 0
    let saque = valorDeSaque(valor)

    while (saque >= valor){
        switch(saque){
            case 100:
                valor -= 100
                notas100++
                break
            case 50:
                valor -= 50
                notas50++
                break
            case 10:
                valor -= 10
                notas10++
                break
            case 5:
                valor -= 5
                notas5++
                break
            case 1:
                valor -= 1
                notas1++
                break
            
            }
        saque = valorDeSaque(valor)
    }
    return elaborarResultado()
}

function valorDeSaque(valor){
    if(valor >= 100){
        return 100
    }else if(valor >= 50){
        return 50
    }else if(valor >= 10){
        return 10
    }else if(valor >= 5){
        return 5
    }else if(valor >= 1){
        return 1
    }
}