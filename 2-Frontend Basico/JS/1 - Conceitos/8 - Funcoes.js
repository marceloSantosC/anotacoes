// função com function
function funcao(x = 1, y = 2){ // x e y são valores padrão
    return x + y
}

// função normal com variável
const funcao2 = function (x, y) {
    return x + y
}

// arrow function com variável
const funcao3 = (x,y) => { 
    return x + y
}

// arrow function com variável e retorno implícito
const funcao4 = (x,y) =>  x + y


console.log(funcao(1,2,3,4)) // param 3 e 4 são ignorados
console.log(funcao()) // recebe o valor padrão