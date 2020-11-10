const numeros = [0, 1, 2 ,3, 4, 5]

// Remover último elemento
numeros.pop()

// Remover primeiro elemento
numeros.shift()

// Adiciona no primeiro índice
numeros.unshift(0)

// Slice retorna um novo array com os elementos de um intervalo [x até y[
// Cria um novo array com os elementos a partir do índice 1 até o 4 (5 não incluso)
const novoArray = numeros.slice(1, 5) 

// Concat
// Concatena um array com outro array ou elemento
const array = ['a', 'b'].concat(['c', 'd'], [['c.a', 'b.a']], 'e') // [[]] array com array dentro
console.log(array)


console.log(novoArray)
console.log(numeros)
