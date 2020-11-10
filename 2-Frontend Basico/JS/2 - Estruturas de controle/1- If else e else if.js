function verdade(valor){
    // If transforma qualquer valor em uma operação logica
    // Se não é feita uma operação lógica é assumida uma comparação == true
    if(valor) {
        console.log('verdade');
    } else if(!valor) {
        console.log('mentira');
    } else {
        console.log('Nunca será executado');
    }
}

// Comparar tipos direntes não gera erro
if("string" == 2){
    console.log("é igual?");
}

verdade(); // undefined 
verdade(null);
verdade(' ');