// Declarações de função

// Arrow function anônima
let anonima = () => {}
// Function anônima
anonima = function () {}

// Function declaration
// É possível usar antes de declarar (hoisting)
literal()
function literal() {
    console.log('literal')
}

// Function expression
// A função deve ser anônima
let funcVariavel = function(){
    console.log('variavel')
}

// Named Function Expression
// Declarar uma função normal que tem nome e é armazenada
// Só é bom porque aparece no stack quando dando debug
let namedFuncExp = function namedFuncExpF(x, y){
    return x - y
}

// Função como dado
// Função em array
// Pode ou não ser anônima
let arrayFunc = [function(){}, literal, funcVariavel]

// Função em objeto 
// Pode ou não ser anônima
let objFunc = {
    funcobj: () => {
        // Essa sintaxe tem o this léxico
    }
}
objFunc.func = function(){
    console.log('Função em objeto')
}
objFunc.func2 = literal

// Função como parâmetro e retorno
// Pode ou não ser anônima
// É possível retornar uma função que contém uma função
function returnExecFunc(func){
    // Recebe uma função, executa e depois retorna
    func()
    return func
}
console.log(returnExecFunc(funcVariavel))
console.log(returnExecFunc(() => console.log('returnExecFunc')))

// É possível retornar uma função e executa-la "ao mesmo tempo"
function somaFunc(a, b){
    return function(c){
        console.log(a + b + c)
    }
}
somaFunc(1,2)(3) //somaFunc(a,b)(c)

// É possível retornar uma função armazena-la em uma variável e executa-la
const funcArmaz = somaFunc(1,2) 
funcArmaz(3)