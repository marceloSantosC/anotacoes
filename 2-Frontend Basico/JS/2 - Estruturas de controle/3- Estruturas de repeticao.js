// while
while(1 != 1){
    console.log('1');
}

// Do
do {
    console.log('1')
} while(1 != 1)

// For
for(let i = 0; i < 10; i++){
    console.log(i)
}

// For in, percorre índice a índice, armazenando o índice na variável i
let array = [1, 2, 3, 4, 5]
for (let i in array) {
    console.log(i, array[i])
}

let obj = {
    nome: 'Ana',
    idade: 22,
    peso: 60
}
for (let atributo in obj) {
    console.log(`${atributo}: ${obj[atributo]}`)
}
