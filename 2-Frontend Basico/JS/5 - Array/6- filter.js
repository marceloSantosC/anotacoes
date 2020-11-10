function Produto(nome, preco, fragil){
    this.nome = nome,
    this.preco = preco,
    this.fragil = fragil
}

const produtos = [new Produto('Notebook', 2000, true), 
    new Produto('Desktop', 1200, true), new Produto('Copo de plástico', 2000, false)]

const filtrarProdutoFragil = function(valor){
    return !valor.fragil
}

const filtrarProdutoCaro = function(valor, indice, array){
    return valor.preco > 1000
}

// Filter
// Recebe um callback com a mesma ordem de parâmetros de map e forEach
// os argumentos passados são os mesmos de filter e map (callback, this)
// Os elementos serão incluidos no array final se a callback retornar true
// Elementos são excluídos quando a callback retorna false
const arrayFiltrado = produtos.filter(filtrarProdutoCaro).filter(filtrarProdutoFragil)
console.log(arrayFiltrado)

// Minha implementação de filter
Array.prototype.meuFilter = function(callback){
    const novoArray = []
    for(let i = 0; i < this.length; i++){
        let resultadoCallback = callback(this[i], i , this)
        if(resultadoCallback == true) {
            novoArray.push(this[i])
        }
    }
    return novoArray
}
const arrayFiltradoMeuMap = produtos.filter(filtrarProdutoCaro).filter(filtrarProdutoFragil)
console.log(arrayFiltradoMeuMap)