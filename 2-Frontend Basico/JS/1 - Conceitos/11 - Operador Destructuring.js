// Destructuring em objeto
const pessoa = {
    nome: 'Nome Random',
    idade: 5,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 2000
    },
}
// Copie os atributos de pessoa e associe o valor deles a variáveis de mesmo nome dos atributos
const {nome, idade} = pessoa

// Copie os atributos de pessoa e associe o valor deles as variáveis que eu escolhi o nome
const {nome: variavelNome, idade: variavelIdade}  = pessoa

// Faz a mesma coisa, mas nom3 tem um valor padrão caso não seja encontrado
// Se o atributo idade não for encontrado sua variável tera o valor de undefined
const {nom3 = 'Nome', idade: idd} = pessoa 

// Apenas logradouro, numero e cep serão copiados para variáveis
// Se o dado pai (endereco), não existir gera um "nullpointer"
const {endereco: {logradouro, numero, cep}} = pessoa


// Destructuring em array
// Armazena o índice 0 na variável pos0
const [pos0] = [1, 2, 3, 4, 5]

// Armazena todos índices menos os índice 2
// n5 será undefined e n6 um valor padrão
const [n1, , n3, n4, n5, n6 = 0] = [1, 2, 3 ,4]
console.log(n1, n3, n4, n5, n6)

// Destructuring como parâmetro na função
// É possível passar um objeto a ser desestruturado, o mesmo vale para array
function func({nome = 'valorPadrao', idade = 'valorPadrao'}){
    console.log(nome, idade)
}

// Declarando várias variáveis
let [var1, var2, var3] = [1, 2, 3]

func(pessoa);
func({nome: 'oi'}) // é possível passar um parâmetro, valor padrão será usado
func() //Não passar valor gera erro