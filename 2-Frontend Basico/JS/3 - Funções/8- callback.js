const pessoas = ['Maria', 'Marta', 'Marcia']
function funcaoQueSeraChamada(nome, indice){
    console.log(`${indice + 1}:  ${nome}`)
}

// A função será chamada quanto o evento (incremento no índice) ocorrer
pessoas.forEach(funcaoQueSeraChamada)