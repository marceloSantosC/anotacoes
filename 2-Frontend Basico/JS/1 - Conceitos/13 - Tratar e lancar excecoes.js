let valor = 10
let outroValor = 10
try {
    if(valor == outroValor)
        // É possível lançar qualquer coisa como erro
        throw new Error('throw lançou um erro!')
        // throw 'Erro: throw lançou um erro!', isso funciona
} 
catch (error) {
    console.log(typeof error)
    console.log(error)
} finally {
    console.log('Throw lançou um erro ou não?')
}