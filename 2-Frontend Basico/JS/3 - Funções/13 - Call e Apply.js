function getPreco(imposto = 0, moeda ='R$') {
    return `${moeda} ${this.preco + imposto}`
}

const produto = {
    nome: 'Notebook',
    preco: 2000,
    getPreco
}

// O código abaixo equivale a isso
console.log(produto.getPreco())

// Apply
// Chama a função getPreco a partir de produto
console.log(getPreco.apply(produto))

// Call
console.log(getPreco.call(produto))

//Call vs apply
// A diferença é a sintaxe
// Call recebe os parâmetros de getpreco normalmente
console.log(getPreco.call(produto, 200, '$')) // (objeto, imposto, moeda)

// Apply recebe os parâmetros de getPreco como array
console.log(getPreco.apply(produto, [200, '$'])) // (objeto, [imposto, moeda])