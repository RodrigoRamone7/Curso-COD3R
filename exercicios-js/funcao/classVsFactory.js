class Pessoa {
    constructor(nome) { // O construtor funciona como os atributos de uma função
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    } // Este construtor utiliza do escopo global, podendo variar o nome dependendo de quem chama a classe
}

const p1 = new Pessoa('João')
p1.falar()

const pessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    } // Este construtor tem contexto lexico, de modo que ele utiliza da variável local para fazer a chamada
}

const p2 = pessoa('Rodrigo')
p2.falar()