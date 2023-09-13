function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'Verificar chave do objeto'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }

}

function imprimirNomeGritado (obj){
    try { // Tentativa com potencial erro
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) { // O que ele vai fazer caso tenha erro
        tratarErroELancar(e)
    } finally { // sempre será executado independente do resultado
        console.log('final')
    }
}

const obj = { name: 'Rodrigo'}
imprimirNomeGritado(obj)