const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c} // Esta é a forma antiga de criar objetos onde seus atributos têm o mesmo nome da variável recebida
const obj2 = {a, b, c} // Esta nova forma faz com que os atributos tenham o mesmo nome de suas variáveis recebidas
console.log(obj1, obj2)

const nomeAttr = 'Nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr // A notação de couchetes permite que o valor recebido pela variável nomeAttr seja o nome do atributo
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // Esta já é uma maneira mais moderna que fazer a notação em couchetes
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // Esta é uma forma antiga de fazer uma função anônima dentro do objeto
    },
    funcao2(){
        // Esta já é uma forma mais direta de definir uma função dentro do objeto
    }
}
console.log(obj5)