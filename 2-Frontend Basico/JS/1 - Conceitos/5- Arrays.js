const valores = [0, 1, 2, 3, 4];

console.log(valores[50]); // Acessar um indíce fora dos limites não causa erro

valores.push(null, 'String', false); // Arrays não são homogêneos

valores.pop(); // remove o último valor

delete valores[0]; // remove o valor do índice 0, que vira <empty item>
console.log(valores);
