function comprarLanche(codigo, quantidade){
    switch(codigo){
        case 100:
            let total = 3.00*quantidade
            console.log(`Pedido: Cachorro Quente`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 3,00`)
            console.log(`Valor total: R$ ${total.toFixed(2).toString().replace(".", ",")}`)
            break
        case 200:
            this.total = 4.00*quantidade
            console.log(`Pedido: Hambúrguer Simples`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 4,00`)
            console.log(`Valor total: R$ ${this.total.toFixed(2).toString().replace(".", ",")}`)
            break
        case 300:
            this.total = 5.50*quantidade
            console.log(`Pedido: Cheeseburguer`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 5,50`)
            console.log(`Valor total: R$ ${this.total.toFixed(2).toString().replace(".", ",")}`)
            break
        case 400:
            this.total = 7.50*quantidade
            console.log(`Pedido: Bauru`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 7,50`)
            console.log(`Valor total: R$ ${this.total.toFixed(2).toString().replace(".", ",")}`)
            break
        case 500:
            this.total = 3.50*quantidade
            console.log(`Pedido: Refrigerante`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 3,50`)
            console.log(`Valor total: R$ ${this.total.toFixed(2).toString().replace(".", ",")}`)
            break
        case 600:
            this.total = 2.80*quantidade
            console.log(`Pedido: Suco`)
            console.log(`Quantidade: ${quantidade}`)
            console.log(`Valor unitário: R$ 2,80`)
            console.log(`Valor total: R$ ${this.total.toFixed(2).toString().replace(".", ",")}`)
            break
        default:
            console.log("Produto inexistente")
    }
}

comprarLanche(100, 2)
console.log("")
comprarLanche(200, 2)
console.log("")
comprarLanche(300, 2)
console.log("")
comprarLanche(400, 2)
console.log("")
comprarLanche(500, 2)
console.log("")
comprarLanche(600, 2)
console.log("")
comprarLanche(700, 2)
console.log("")