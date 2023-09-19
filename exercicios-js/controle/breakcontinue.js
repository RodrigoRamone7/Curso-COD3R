const nums = [1,2,3,4,5,6,7,8,9,10]

for (x in nums){
    if (x == 5) { // Aqui o break interrompe o laço de repetição
        break
    }
    console.log(`x ${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5) { // Aqui o laço continua e apenas impede que a condição não seja executada
        continue
    }
    console.log(`y ${y} = ${nums[y]}`)
}

externo:
for (a in nums){
    for(b in nums){
        if (a == 2 && b == 3) break externo // Escrevendo dessa forma, o break não mais vai agir no bloco mais interno mas sim do bloco associado com o rótulo
        console.log(`Par = ${a},${b}`)
    }
}