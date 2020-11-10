// É chamado rest/spread dependendo de como é usado
// Quando usado para espalhar (copiar) atributos ou elementos é chamado spread
// Quando usado para juntar parâmetros de função num array é chamado rest

// Spread
const obj = {
    nome: 'Marcia',
    idade: 23,
}
// ...obj é operador, ele espalhou (copiou) os atributos de obj em cloneDeObj
// Os dois são objetos diferentes, obj não foi alterado
const cloneDeObj = {peso: 10 ,...obj}
console.log(cloneDeObj)

// spread em array
const array = [1, 2, 3]
const spreadArray = [0, ...array, 4, 5] // 0, 1, 2, 3, 4
console.log(spreadArray)


// Rest
// Todos argumentos adicionais recebidos serão adicionados a um array  de nome numeros
const somar = (acumulador, valorAtual) => acumulador += valorAtual
function somarVariosNumeros(funcao, ...numeros){
    return numeros.reduce(funcao)
}
console.log(somarVariosNumeros(somar, 1, 1, 1, 1, 1))