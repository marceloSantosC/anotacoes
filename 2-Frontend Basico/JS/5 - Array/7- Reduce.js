function Aluno(nome, nota, bolsista){
    this.nome = nome
    this.nota = nota
    this.bolsista = bolsista
}

const alunos = [new Aluno('Pedro', 10, true), 
        new Aluno('Julia', 5, true),
        new Aluno('Ana', 10, true),
        new Aluno('João', 5.0, false)]

let valorInicial = 1
const notas = alunos.map(aluno => aluno.nota)

// Recebe uma callback e um valor inicial, executa a callback e acumula seu return
// Pode ser usada sucessivamente
console.log(notas.reduce(function(acumulador, valorAtual, indice, array){
    console.log(`${indice}: ${acumulador}`)

    return acumulador += valorAtual
}, valorInicial))

// Desafio 1: Usar reduce para dizer se todos alunos são bolsistas
const bolsistas = alunos.map(aluno => aluno.bolsista)
console.log(bolsistas.reduce(function(acumulador, valorAtual){
    return acumulador && valorAtual
}))

// Desafio 1: Usar reduce para dizer se algum dos alunos são bolsistas
console.log(bolsistas.reduce(function(acumulador, valorAtual){
    return acumulador || valorAtual
}))

// Implementando reduce
Array.prototype.meuReduce = function(callback, valorInicial){
    let indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for(let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
console.log(bolsistas.meuReduce(function(acumulador, valorAtual){
    return acumulador && valorAtual
}))
console.log(bolsistas.meuReduce(function(acumulador, valorAtual){
    return acumulador || valorAtual
}))

console.log(notas.meuReduce(function(acumulador, valorAtual, indice, array){
    console.log(`${indice}: ${acumulador}`)

    return acumulador += valorAtual
}, valorInicial))