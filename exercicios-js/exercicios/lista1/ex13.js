function diaUtil (dia){
    switch (dia){
        case 1:
            console.log('Domingo não é dia útil')
            break
        case 2:
            console.log('Segunda-feira é dia útil')
            break
        case 3:
            console.log('Terça-feira é dia útil')
            break
        case 4:
            console.log('Quarta-feira é dia útil')
            break
        case 5:
            console.log('Quinta-feira é dia útil')
            break
        case 6:
            console.log('Sexta-feira é dia útil')
            break
        case 7:
            console.log('Sábado não é dia útil')
            break
        default:
            console.log('Dia inválido')
        
    }
}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)