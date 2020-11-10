// import retorna uma promise que passa o módulo como objeto para uma callback
import('./6 - Usando o módulo de agregação.js').then((module) => {
    module.default();
    module.helloWorld(MeusModulos.texto);
});