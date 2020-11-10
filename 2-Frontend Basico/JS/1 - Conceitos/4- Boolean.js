// Formas de representar FALSE
let boolean = false;
boolean = !!0;
boolean = !!'';
boolean = !!null;
boolean = !!undefined;

// Formas de representar TRUE
boolean = true;
boolean = !!1; // 1 assim como todos números > 0 são verdadeiros
boolean = !!' '; // Uma string não vazia é true
// existem mais formas

// Valor padrão 
let valor = '' || 'String';
console.log(valor); // a variável recebe o valor que for true 