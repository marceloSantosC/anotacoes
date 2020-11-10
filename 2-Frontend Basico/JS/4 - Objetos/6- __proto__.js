
const avo = {
    nome: 'Kevin',
    avo: true,
    idade: 70
}

const pai = {
    nome: 'Alex',
    pai: true,
    idade: 40,
    __proto__: avo
}

const filha = {
    nome: 'Ana',
    filha: true,
    idade: 19,
    __proto__: pai
}

// Avo aponta para Object.prototype, embora seja mostrado como {}
console.log(avo.__proto__)

// __proto__ de avo é igual e Object.prototype
console.log(avo.__proto__ === Object.prototype)

// Object.prototype aponta para null em seu prototype
console.log(Object.prototype.__proto__ === null) 

// filha aponta para pai
console.log(filha.__proto__ === pai)

// Cadeia de prototype
console.log(filha.avo) // Percorre os objetos apontados no prototype em busca do atributo
console.log(filha.idade) // Percorre os prototypes, mas não acha o atributo

// Sombreamento
// Fica com o valor do primeiro atributo encontrado, no caso a idade da filha
console.log(filha.idade)

// Usando um método do objeto pai
// Cria um objeto pai
const Pessoa = {
    nome: 'Marcela',
    falar(){
        console.log(`Oi eu sou ${this.nome}`)
    },
    falarMais(){
        console.log('Não falarei mais.')
    }

}

// Herda do objeto pai
const OutraPessoa = {
    nome: 'Maria',
    __proto__: Pessoa,
    // Sobreescreve método do pai
    falar(){
        // Super acessa o atributo pai
        console.log(`Sou ${this.nome}, filha de ${super.nome}`)
    }
}

Pessoa.falar() // Oi eu sou Marcela
Pessoa.falarMais()
OutraPessoa.falar() // Sou Maria filha de Marcela
OutraPessoa.falarMais()
console.log(OutraPessoa) // Não serão mostrados atributos ou métodos herdados no toString

console.log(OutraPessoa.__proto__)