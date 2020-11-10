// É como um objeto, mas a chave e o valor podem ser qualquer coisa
const tecnologias = new Map()
const obj = {nome: 'PHP'}

// Adicionar chaves e valores
// O valor é um objeto
tecnologias.set('Java', {framework: false})
// Chave objeto
tecnologias.set(obj, 123 )

// Acessando valores
console.log(tecnologias.get('Java'))
console.log(tecnologias.get(obj))

// adicionar chaves e valores pelo construtor
const map = new Map([['chave', 'valor'], ['outraChave', 'outroValor']])

// contem
console.log(map.has('chave'))

// deletar
map.delete('chave'); //retorna true/false

// tamanho
console.log(map.size);