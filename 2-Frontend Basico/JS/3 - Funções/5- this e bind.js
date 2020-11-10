// Bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // this aponta para pessoa
    }
}
pessoa.falar() // this ainda aponta para pessoa

let falar = pessoa.falar
falar() // Undefined porque o this não aponta mais para pessoa

falar = pessoa.falar.bind(pessoa) // bind faz com que o this sempre aponte para pessoa
falar()