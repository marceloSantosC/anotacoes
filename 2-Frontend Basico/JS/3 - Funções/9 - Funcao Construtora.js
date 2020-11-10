function Carro(velocidadeMax = 200, aceleracao = 5){
    // velocidadeAtual é privado pois let tem escopo local
    // Let não precisa de this para ser acessado dentro do objeto já que é uma variável
    let velocidadeAtual = 0
    this.acelerar = () => {
        if(velocidadeAtual < velocidadeMax) {
            velocidadeAtual += aceleracao;
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    // This torna a função pública
    this.getVelocidadeAtual =() => {
        console.log(velocidadeAtual)
        return velocidadeAtual
    }

    getConsole() = function() {
        console.log('teste')
    }
}

const Corsa = new Carro
console.log(Corsa.velocidadeAtual) // Undefined, velocidade atual não é acessível
Corsa.acelerar()
Corsa.getVelocidadeAtual()

const Ferrari = new Carro(400, 100)
Ferrari.acelerar()
Ferrari.getVelocidadeAtual()

// Ferrari.getConsole() erro, pois a function é privada