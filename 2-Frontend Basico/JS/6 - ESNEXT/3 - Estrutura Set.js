const set = new Set()

// adicionar
set.add(1)
set.add(2)
set.add('21')

// contem
set.has(1)

// size
set.size

// delete
set.delete(1)

// criar a partir de array
// ignora repetições
const array = [1, 1, 2, 3]
const outroSet = new Set(array)

console.log(set)
console.log(outroSet)
