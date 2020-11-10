const array = [1 ,2 ,3 ,4 ,5 ,6]
const funcaoDobro = x => x * 2

// É possível passar o this além da callback
// A callback passada para map funciona da mesma forma que a de forEach (valor, indice, array)
// A callback sempre deve retornar algo
// É possível usar um map após outro
// O array original não é alterado
const arraDobro = array.map(funcaoDobro).map(funcaoDobro)
console.log(array)
console.log(arraDobro)

// Desafio MAP
// Retornar apenas os preços de um array de JSON
function Produto(nome, preco) {
    return JSON.stringify({
        nome,
        preco })
}

const carrinho = [Produto('TV', 2000), Produto('Rádio', 200), Produto('Notebook', 1000)]
const callbackRetornarPrecos = function(json){
    const obj = JSON.parse(json)
    return `R$ ${obj.preco}`
}
const precos = carrinho.map(callbackRetornarPrecos)
console.log(precos)

// Desafio com minha implementação de map
Array.prototype.meuMap = function(callback){
    const array = []
    for(let i = 0; i < this.length; i++){
        array.push(callback(this[i], i, this))
    }
    return array
}

const precoMeuCallback = carrinho.meuMap(callbackRetornarPrecos)
console.log(precoMeuCallback)


