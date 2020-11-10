// Criando classe
class Pessoa{
    constructor(nome = 'ValorPadrao', idade = 0) {
        this.nome = nome
        this.idade = idade
    }

    falar(){
        return `Oi, meu nome é ${this.nome}, tenho ${this.idade} anos.`
    }

    dormir(){
        return `${this.nome} esta dormindo! ZZZZZ`
    }
}
const Ana = new Pessoa('Ana', 35)
console.log(Ana.falar())
console.log(Ana.dormir())

// Herança
class Pai extends Pessoa{
    constructor(sobrenome, nome, idade) {
        // Chama o construtor da função pai passando os atributos
        super(nome, idade)
        this.sobrenome = sobrenome
    }
}
const pai = new Pai('Nobrega', 'Carlos', 45)
console.log(pai)
console.log(pai.falar())
