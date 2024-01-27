class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Esta é a forma pela qual se da a herança de classes
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // é a forma de chamar atributos da classe superior
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)