// Formas para se ter um valor padrão
// Operador ||
function valorPadrao1(a, b, c){
    // A, b e c receberão seu valor padrão ou caso false receberão 1
    // Se 0 for passado na chamada retornará o valor 1 já que 0 == false
    // É útil para se ter um valor padrão em variáveis
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(valorPadrao1(0 ,0 ,0)) // recebera valor (1, 1, 1)

// Operador ternário
function valorPadrao2(a, b, c){
    a = a !== undefined ? a : 1 // forma 1
    
    // O índice 1 (segundo parametro) de arguments está ocupado(é verdadeiro)?
    b = 1 in arguments ? b : 1 // forma 2

    c = isNaN(c) ? 1 : c // forma 3
    return a + b + c
}

// Ecma 2015
// É a melhor forma desde que exista suporte no browser (provavelmente vai ter)
function valorPadraoMelhor(a = 1, b = 1, c = 1){
    return a + b + c
}

