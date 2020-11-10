// retorno é opcional
function returnOpcional(a, b){
    if(a > b){
        return a
    } else if (a == b) {
        return [a, b]
    }
    // Se b > a o retorno é undefined
}
console.log(returnOpcional(1,50))

// parametro opcional
// É o mesmo que chamar a função passando undefined como parâmetro
console.log(returnOpcional()) 