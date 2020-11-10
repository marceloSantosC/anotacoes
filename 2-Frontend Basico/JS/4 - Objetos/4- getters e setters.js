
// get e set só funciona usando notação literal ou classe
const sequencia = {
    _valor: 1, // _ é uma convenção que indica que a variável é privada
    get _valor() { 
        return this._valor
    },
    set _valor(valor) {
        this._valor = valor
    },
}

// Os objetos são acessados sem _
// Usando set
sequencia.valor = 2000

// Usando get
console.log(sequencia.valor)

// Valor ainda é público, _ é só convenção
console.log(sequencia.valor)