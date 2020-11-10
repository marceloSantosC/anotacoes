function pessoa(){
    this.idade = 0
    // ´É possível armazenar o this na const self, e substituir o this dentro da função por self
    const self = this
    // Recebe uma função e um intervalo em MS e executa a função a cada x ms
    // O this da função passada não aponta para o this do objeto, e sim para o this de setInterval
    // O bind(this) faz com que o this da função aponte para o objeto
    // É melhor passar uma arrow function
    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoa