// for of
const array = [1, 2, 3, 4, 5]
for(let valor of array) {
    // Rertorna o valor
    console.log(valor);
}

// for in
const pessoa = {
    nome: "Marcia",
    idade: 22
}

for(atributo in pessoa) {
    // Retorna o nome dos atributos
    console.log(atributo);

    // Retorna o valor dos atributos
    console.log(pessoa[atributo]);
}