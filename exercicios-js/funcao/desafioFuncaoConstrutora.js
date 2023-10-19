function pessoa (nome) {
    const pessoa = {
        nome
    }
    console.log(`Meu nome é ${pessoa.nome}`)
}

pessoa('Rodrigo')

function criarPessoa (nome){
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new criarPessoa('João')
p1.falar()