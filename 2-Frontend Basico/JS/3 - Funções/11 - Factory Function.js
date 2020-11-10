function criarPessoa(nome = 'Nome', idade = 0) {
    return {
        nome,
        idade,
        pais: 'Brasil'
    }
}
const Marcio = criarPessoa('Marcio', 18)
const Maria = criarPessoa('Maria', 19)
console.log(Marcio)
console.log(Marcio === Maria)