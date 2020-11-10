// Simulando new
function novo(funcao, ...params){
    // cria o objeto vazio
    const objeto = {}

    // Define que __proto__ aponta para o prototype da função construtora
    objeto.__proto__ = funcao.prototype

    // Chama a função construtora passando o objeto como this e os parametros 
    // Aplica os parâmetros
    funcao.apply(objeto, params)
    return objeto
}

function ConstrutoraPessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

const obj = novo(ConstrutoraPessoa, 'Maria', 23)
console.log(obj)