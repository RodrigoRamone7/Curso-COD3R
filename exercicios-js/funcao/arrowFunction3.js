let comparaComThis = function (param) {
    console.log(this === param)
} // no escopo de uma função comum, o this aponta para o escopo global

comparaComThis(globalThis)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(globalThis)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
// Neste caso o this referencia para o módulo do arquivo
comparaComThisArrow(globalThis)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
// A arrow function sempre pravalece no contexto lexico
comparaComThisArrow(module.exports)