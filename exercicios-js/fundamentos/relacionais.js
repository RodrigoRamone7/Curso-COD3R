console.log('01)', '1' == 1) // comparando os valores contidos
console.log('02)', '1' === 1) // comparando os tipos (se é exatamente igual a comparação)
console.log('03)', '3' != 3) // se é diferente da comparação, neste caso comparamos valores e não tipos
console.log('04)', '3' !== 3) // aqui se compara tipos, portanto, é diferente

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)// estes valores não são iguais pois se tratam de endereços de memória
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // neste caso são iguais pois está sendo comparado os valores numéricos e mesmo tipo

console.log('12)', undefined == null)
console.log('13)', undefined === null)
