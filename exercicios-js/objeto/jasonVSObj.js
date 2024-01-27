const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse('{'a': 1, 'b': 2, 'c': 3 }'))
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Para que o JSON seja válido, os atributos devem estar dentro de áspas duplas ""
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))