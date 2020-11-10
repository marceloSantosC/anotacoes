// Esse método recebe um parametro que diz se ele deve(resolve) ou não(reject) fazer uma requisição
function fazRequisicao(fazer = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // O método then será chamado com o argumento false
            // Resolve e reject aceitam só um parâmetro
            if (!fazer) {
				reject('A requisição não sera feita')
            }
			resolve("Promise resolvida");
        }, 5000);
    });
}

// Se a promessa for cumprida será executado then, senão catch
fazRequisicao(false)
    .then(console.log)
    .catch(console.error);

// também é possível passar o catch junto com o método que será executado em then
// then(método, catch)
fazRequisicao()
    .then(console.log, console.error);

// Async await
// Facilita o uso de promises
// A função deve ser marcada como async
let fazReq = async () => {
    // Await indica que a resposta de faz requisição será esperada antes de fazer outra coisa
    const req = await fazRequisicao()
    return req
} // retornar um objeto assyncFunction
fazReq().then(console.log, console.error)