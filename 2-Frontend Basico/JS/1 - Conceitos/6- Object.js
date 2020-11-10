// Criação dinâmica
const objVazio = {};

// notação ponto
objVazio.atributo = "valor";

// colchetes
objVazio['atributo com espaco'] = 20; // evitar usar espaços
objVazio['outroAtributo'] = 200;

// criação
const objeto = {
    chave: 'valor',
    outraChave: 'valor',
}

// Json 
const json = '{"chave": "valor", "outraChave": 80}';

// Objetos são tipo referência
const a = {chave: 1};
const b = a;
a.chave = 2; // Chave terá valor 2 em B e em A

// deletar atributo
delete objeto.outraChave;

console.log(objVazio);
console.log(objeto);
console.log(json);
console.log(a);