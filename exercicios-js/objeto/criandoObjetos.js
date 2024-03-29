// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtora
function produto(nome, preco, desc){
    this.nome = nome // Ao utilizar o this, o atributo se torna público, podendo ser alterado de fora da função
    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new produto('Caneta', 7.99, 0.15)
const p2 = new produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())
console.log(p1)

// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())
console.log(f1)

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)