function planoDeTrabalho(salario, plano){
    switch(plano){
        case "A":
            console.log(`Seu salário de ${salario} receberá um aumento de 10%`)
            console.log(`Salário atual ${salario+(salario*0.1)}`)
            break
        case "B":
            console.log(`Seu salário de ${salario} receberá um aumento de 15%`)
            console.log(`Salário atual ${salario+(salario*0.15)}`)
            break
        case "C":
            console.log(`Seu salário de ${salario} receberá um aumento de 20%`)
            console.log(`Salário atual ${salario+(salario*0.2)}`)
            break
        default:
            console.log("Plano de trabalho inválido")
    }
}

planoDeTrabalho(1000, "A")
planoDeTrabalho(1000, "B")
planoDeTrabalho(1000, "C")
planoDeTrabalho(1000, "D")