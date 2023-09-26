function pessoa() {
    this.idade = 0

    const self = this // ao armazenar o this numa constante, passa a referenciar o objeto dentro da função, podendo trocar o this por self
    setInterval(function(){
        /*this.*/self.idade++ // desta forma o this não varia e sempre irá apontar para pessoa
        console.log(/*this.*/self.idade)
    }/*.bind(this)*/, 1000)
}

new pessoa