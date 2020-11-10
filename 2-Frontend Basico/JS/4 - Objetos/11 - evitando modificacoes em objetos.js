
// Prevenir modificações  de atributos (exceto exclusão)
const produto = Object.preventExtensions({
    nome: 'Notebook',
    preco: 1999.99,
})
// testar se é possível adicionar atributos ao objeto ou não (false true)
console.log(Object.isExtensible(produto))
delete produto.nome
console.log(produto)

// Previnir modificações de atributos e adição de novos atributos
const pessoa = Object.seal({
    nome: 'Maria',
    nascimento: '17/01/2000'
})
// Não dara efeito
delete pessoa.nome
pessoa.nome = 'Marta'
pessoa.idade = 20

console.log(pessoa)

// Freeze
// Em funcoes importantes.js