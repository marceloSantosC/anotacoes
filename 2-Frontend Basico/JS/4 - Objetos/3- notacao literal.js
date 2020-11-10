// criando atributos a partir de variáveis
let nome = 'Ana'
let idade = 25
const obj = {nome, idade} // cria os atributos com mesmo nome e valor das variáveis

//também é possível fazer dessa forma quando o valor está em outra variável
// cria um atributo nome com o valor da variavel idade
const obj2 = {[nome]: idade} 
console.log(obj2)
console.log(obj)

// sintaxe mais simples para functions
const obj3 = {
    // As duas formas de escrita são equivalentes
    funcao: function(){
        return ''
    },
    funcao2(){
        return ''
    }
}