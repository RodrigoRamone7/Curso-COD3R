const sequencia = {
    _valor: 1, // O Underline serve como uma convenção que diz que este atributo é pretendido ser usado apenas internamente
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)