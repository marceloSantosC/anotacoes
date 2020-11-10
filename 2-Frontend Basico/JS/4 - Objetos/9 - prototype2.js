// Todos são funções e por isso seu prototype aponta para Function.prototype
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof Number)

// Todo number agora possui o método multiplicarPor2
// É um procedimento que deve ser feito com cuidado, de modo a não gerar efeitos colaterais
Number.prototype.multiplicarPor2 = function(){
    // This se refere ao valor 
    return this * 2
}
console.log((2).multiplicarPor2())

// Nunca modificar função existente
Number.prototype.toFixed = function(number){
    return NaN
}
console.log((2).toFixed(2))
