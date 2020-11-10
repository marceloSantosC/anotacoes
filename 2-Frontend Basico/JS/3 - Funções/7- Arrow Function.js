// arrow
// Função que tem this fixo e sintaxe mais curta
let arrow = (a) => {
    return a * 2
}

// retorno implícito
arrow = a => a * 2

// sem parâmetro
// _ é um parâmetro, porém ignorado
arrow = () => console.log('a') // forma padrão 
arrow = _ => console.log('a')

// this
function pessoa(){
    this.idade = 0
    // A arrow func foi definida dentro de pessoa, então seu this aponta para pessoa
    // mesmo que setInterval chame a função
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}