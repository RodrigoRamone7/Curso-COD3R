// CÓDIGO NÃO EXECUTÁVEL!!

// Procedural
processamento(valor1, valor2, valor3)


// OO (Orientação a Objeto)
objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
        //...
    }
} // O objeto vai funcionar como uma capsula que armazena comportamentos(funções) e valores(atributos)

objeto.processamento()// Então assim se passa a invocar o objeto ao invés da função pois o método está dentro do objeto

// Princípios importantes:
// 1. Abstração: Se trata do conceito de traduzir informações do mundo real para dentro do software
// Ex.: Um sistema do DETRAN precisa do objeto carro, tal objeto tem informações de placa, chassi, ano do veículo, marca, etc.
// Não faz sentido dentro do exêmplo que o objeto carro tenha dentro de si, uma função de aceleração.
// Então o desafio da abstração no paradiga de orientação a objeto é abstrair informações do mundo real para o software.
//
// 2. Encapsulamento: É o conceito de esconder detalhes de sua implementação para a interface
// Ex.: Existem vários modelos de carros diferentes. Alguns têm motos X, outros motor Y, seus câmbios também mudam.
// Apesar da mudança em seus componentes internos, a forma de dirigir não muda. O conceito de encapsulamento segue uma premissa parecida.
// Um objeto que tem seu funcionamento interno dependente de muitos fatores externos pode trazer alguns problemas, portanto a sua implementação deve ser simples e depender o mínimo possível de outros objetos.
//
// 3. Herança (prototype): Heranças são características de objetos herdadas de objetos pai.
// Ex.: Um ser humano é um animal. Animais neste caso é o objeto pai, a especialização dele, que no caso são os mamiferos, se trata de uma herança do objeto pai que são animais. Características mais genéricas que definem um ser vivo, sempre estarão presentes em toda a cadeia de objetos que segue abaixo do objeto pai.
//
// 4. Polimorfismo: É o conceito de multiplas formas
// Ex.: Quando um objeto é definido de forma genérica, por exemplo, um carro ou um celular, tais objetos seguem um mesmo padrão, mas o mesmo objetos uma hora aponta para uma forma, como uma ferrari ou um uno que são carros, mas têm formas diferentes, portanto, são objetos polimorficos.