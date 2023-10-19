// IIFE -> Immedietely Invoked Function Expression
(function (){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})() // Desta forma, variáveis e tudo que é criado dentro da função auto invocada será de escopo privado da função