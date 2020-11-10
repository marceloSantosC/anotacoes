const aprovados = ['Rafael', 'Gustavo', 'Ana', 'Patricia']
// Recebe e executa uma callback a cada iteração, também é possível passar this
// A callback recebe o valor do índice, o índice e o array que chamou forEach
aprovados.forEach(function(valor, indice, array) {
    console.log(`${indice}: ${valor}`)
    // console.log(array)
})

// Armazenar função em variável
const imprimirIndiceAprovados = (valor , indice) => console.log(indice)
aprovados.forEach(imprimirIndiceAprovados)

// Implementando ForEach com prototype
Array.prototype.meuforEach = function(funcao) {
    for(let i = 0; i < this.length; i++){
        funcao(this[i], i, this)
    }
}

// Implementando ForEach sem prototype
function paraCada(array = [], funcao){
    for(let i = 0; i < array.length; i++){
        funcao(array[i], i, array)
    }
}

// Testes
const funcaoParaTeste = function(valor, indice, array) {
    console.log(`${indice}: ${valor}`)}
paraCada(aprovados, funcaoParaTeste)
aprovados.meuforEach(funcaoParaTeste)

