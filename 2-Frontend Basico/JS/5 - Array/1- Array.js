// Object
console.log(typeof new Array())
console.log(typeof [])

// Declaração
// new
let declaracaoDeArrayNew = new Array(1, 2 ,3 , 4)
console.log(declaracaoDeArrayNew[0])
// literal
let declaracaoLiteral = [1, 2, 3, 4]

// Adicionar
declaracaoLiteral[4] = 0
declaracaoLiteral.push(6)
console.log(declaracaoLiteral)

// O array não é reordenado quando um índice é removido
delete declaracaoLiteral[1]
console.log(declaracaoLiteral)

// Ordenar array
// Altera o array original
declaracaoLiteral.sort()
console.log(declaracaoLiteral)

// Splice é usado para excluir ou substituir elementos
// remove dois elementos a partir de 0 (incluindo 0)
declaracaoLiteral.splice(0, 2) 
// Exlclui 3 elementos a parir do índice  0 e adiciona os elementos 10 e 20
declaracaoLiteral.splice(0, 3, 10, 20)
// Exlclui 0 elementos a parir do índice 3 e adiciona o elemento 30
declaracaoLiteral.splice(3, 0, 30)
console.log(declaracaoLiteral)
