// Escopo de var
{
    var varEscopoGlobal = 2
}

function varTeste(){
    var varEscopoFuncao = 1 // Essa variável não tem ligação com a outra
    return varEscopoFuncao
}

// Variáveis declaradas com var ou estão no escopo da função ou no da window
// É possível redeclarar uma variável var sem gerar erro e sobrescrever o valor
var varEscopoGlobal = 3 // valor de var é 3 em todos escopos (menos de função)
console.log(varEscopoGlobal) // funciona

// Escopo de let e const
let escopoLocal = 2
console.log(escopoLocal)
let escopoLocal2 = 500
{
    let escopoLocal = 200 // Não sobreescreve a variável do escopo acima
    console.log(escopoLocal) // o valor será 200 e a variável acima continua como 2
    console.log(escopoLocal2) // Acessa a variável do bloco mais externo sem problemas
}

// var em loop
for(var i = 0; i < 10; i++){
    i++;
}
console.log(i) // i terá valor 10

// hoisting
// Uma variável declarada com var pode ser usada antes de declarada
// Isso é possível porque o interpretador joga as declarações de var para cima
// Só as declarações são jogadas para cima, as atribuições de valor não
console.log('a = ' + a) // a = undefined
var a = 10
console.log('a = ' + 1) // a = 10

// contexto léxico
function contextoFuncao(){
    let x = 200 // variavel no contexto léxico da função
    return x
}
let x = 0 //variável no contexto léxico global
contextoFuncao() // retorna 200, o contexto é diferente