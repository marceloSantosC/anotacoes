// Object.freeze
// Impede que um objeto seja modificado de qualquer forma, mas não gera erro
// Torna o objeto constante
const objeto = {
    nome: 'Ana',
    idade: 26,
}
Object.freeze(objeto)
delete objeto.nome // não será aplicado nem gera erro
objeto.nome = 'Maria' // nada acontece
objeto.peso = 55 // nada acontece