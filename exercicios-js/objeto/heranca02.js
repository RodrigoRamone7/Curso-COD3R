// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, arrt2:'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.arrt2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf( ferrari, carro )
Object.setPrototypeOf( volvo, carro )

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())