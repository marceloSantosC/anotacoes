const obj = {
    nome: 'Marcia',
    idade: 25,
    estado: 'RJ',
    validarRg(){
        return '51.448.725.9'
    }
}

// Converter objeto para Json
const objetoParaJson =  JSON.stringify(obj) // '{"nome":"Marcia","idade":25,"estado":"RJ"}'
console.log(objetoParaJson)

// Json para objeto
const jsonParaObjeto = JSON.parse(objetoParaJson)
console.log(jsonParaObjeto)

// Json suporta objetos e arrays, sejam compostos de outros arrays/objetos ou não
const jsonComArrayObjeto = '{"array": [1, 2, 3], "objeto": {"nome": "ana"}}'
console.log(JSON.parse(jsonComArrayObjeto))