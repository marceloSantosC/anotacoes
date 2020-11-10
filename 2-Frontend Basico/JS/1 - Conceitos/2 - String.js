const string = 'Strings'

console.log("charAt " + string.charAt(5));

console.log("charCodeat: " + string.charCodeAt(5)); // retorna o valor na tabela unicode

console.log("indexOf: " + string.indexOf('S')); // Retorna o primeiro índice encontrado

console.log("substring: " + string.substring(2));

console.log("replace: " + string.replace('t', 'g')); // aceita índices

console.log("1,2,3,4,5,6".split(',')); // converte em array