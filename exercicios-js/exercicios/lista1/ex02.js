/*
02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

function tipoDoTriangulo (l1, l2, l3){
    if(l1 == l2 && l2 == l3){
        console.log('Este triângulo é Equilátero')
    } else if(l1 == l2 || l2 == l3 || l1 == l3){
        console.log('Este triângulo é Isósceles')
    } else {
        console.log('Este triângulo é Escaleno')
    }

    
}

tipoDoTriangulo(2, 2, 2)
tipoDoTriangulo(3, 2, 2)
tipoDoTriangulo(3, 2, 3)
tipoDoTriangulo(3, 2, 5)