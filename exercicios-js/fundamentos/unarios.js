let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) // o resultado é true pois o incremento fora executado antes do decremento
console.log(num1 === num2)