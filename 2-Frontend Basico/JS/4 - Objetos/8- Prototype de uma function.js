function funcaoConstrutora() {}

const objetoComNewFuncao = new funcaoConstrutora
const objetoComNewObject = new Object

// A função construtora aponta para Function.__proto__
console.log(funcaoConstrutora.__proto__ === Function.__proto__)

// Objetos criados com new Object e new Function apontam para lugares diferentes
// objetoComNewFuncao.__proto__ aponta para o prototype da função
console.log(objetoComNewFuncao.__proto__ === funcaoConstrutora.prototype)

/* Agora toda vez que um objeto for criado com new 
ele terá em seu padrão o atributo nome com o valor Lucia */
// Mexer em protype é o mesmo que dizer todo novo objeto criado terá um atributo/função
// Mexer em __proto__ é o mesmo que dizer que atributos devem ser procurados na cadeia de protipos
funcaoConstrutora.prototype.nome = 'Lucia'
const obj = new funcaoConstrutora
console.log(obj.nome)
