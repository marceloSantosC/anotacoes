// Import normal
// Importa usando o mesmo nome do exports (named export)
// texto será referenciado como ola
import {texto as ola, helloWorld} from './2 - Exportando tudo.js';


// Import default
// Importa o default, o nome ali pode ser qualquer coisa
// Esse código é o mesmo que import {default as Default} from './3 - Export default.js';
// É possível exportar mais coisas além do default
import Default from './3 - Export default.js';


// Objeto módulo
// Exporta tudo do arquivo e armazena em um objeto
import * as Export from './1 - Exportando um por um';

// Chama a função importada usando seu nome
helloWorld(ola);

// Chama a função anônima do arquivo
Default();

// Chama o objeto que contem os exports
console.log(Export.helloWorld(Export.texto));