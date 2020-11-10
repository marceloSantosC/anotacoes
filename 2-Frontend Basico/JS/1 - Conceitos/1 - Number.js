// Number

let number = 1.0;
console.log(Number.isInteger(number));
number = 15;

// Cortando casas decimais
console.log(number.toFixed(0)); // número terá  0 casas decimais

// Transformando bases
console.log(number.toString(16)); // Hexadecimal
console.log(number.toString(2)); // Binário

// retornando infinity
console.log(0/0);

// String dividido por number
console.log("10"/5); // A string deve conter um número

// Usando funções em number sem variável
console.log((10).toString(2)); // Isso só funciona por causa dos ()

