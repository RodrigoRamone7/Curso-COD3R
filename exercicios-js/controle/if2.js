function teste1(num){
    if(num > 7)
        console.log(num) // JavaScript não considera identação e os blocos são opcionais em caso da estrutura if, porém, somente serve para sentenças de uma única linha

    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // O ; termina a sentença no bloco if
        console.log(num)
    }
    
}
teste2(6)
teste2(8)