// Criar objeto já com a herança
// Cria o objeto pai
const pai = {
    nome: 'Anderson',
    pai: true
}
// Object.create recebe o objeto pai como primeiro param
const filha = Object.create(pai, {
    nome: {value: 'Bia', writable: true},
    idade: {value: 19, writable: false},
}) // (protótipo, {atributos})


// Estabelecer relação de herança em objeto existente
const outraFilha = {}
// Altera o __proto__
Object.setPrototypeOf(outraFilha, pai) // (objeto, protótipo)

// __proto__ e prototype não necessariamente apontam para o mesmo objeto
console.log(outraFilha.prototype === outraFilha.__proto__)
console.log(outraFilha.__proto__)

// Verificar se um atributo é ou não herdado
console.log(filha.hasOwnProperty('nome'))
console.log(filha.hasOwnProperty('pai'))