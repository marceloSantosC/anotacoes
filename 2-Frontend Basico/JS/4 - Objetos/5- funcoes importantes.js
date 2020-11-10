const pessoa = {
    nome: 'Rebeca',
    idade: 19,
    nasc: new Date(),
}

// retorna os atributos (chaves) do objeto em um array
console.log(`Keys: ${Object.keys(pessoa)}`)

// retorna os valores dos atributos do objeto em um array
// é uma coisa nova e não possui 100% de suporte
console.log(`values: ${Object.values(pessoa)}`)

// retorna os atributos e valores do objeto, 
// é uma coisa nova e não possui 100% de suporte
Object.entries(pessoa)

// Definir propriedade e algumas opções através de um objeto passado como parâmetro
// objeto alvo, nome do atributo, {configs}
Object.defineProperty(pessoa, 'sexo', {
    enumerable: true, // Se será enumerado em object.keys values e coisas do tipo
    writable: false, // é alterável
    value: 'F',
})

const objDestino = {a: 1}
const obj1 = {a: 2}
const obj2 = {b: 1}

// Concatena objetos em um novo objeto, sobrescrevendo valores repetidos
const novoObj = Object.assign(objDestino, obj1, obj2)
console.log(novoObj)

