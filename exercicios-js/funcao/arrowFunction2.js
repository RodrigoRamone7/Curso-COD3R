function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // com a função arrow, o this permanece imutável
}

new Pessoa