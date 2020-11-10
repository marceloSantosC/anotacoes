// notação literal
let obj = {}

// new 
obj = new Object()

// função constrututora
function produto(nome, preco){
    // nome é público por causa de this
    this.nome = nome
    // preco é privado
    let valor = preco
    this.getValor = () => valor
}
obj = new produto('Notebook', 2000)
console.log(obj.getValor()); // 2000
obj.valor // undefined

// função factory
function produtoFactory(nome, preco){
    return {
        nome,
        preco,
    }
}
obj = produtoFactory()

// Object.create
// Cria um objeto a partir de um prototype
obj = Object.create(null) // recebe um objeto para ser usado como prototype como parâmetro

