// Arguments é um objeto que armazena todos parametros passados
function argumentsTeste() {
    console.log(typeof(arguments))
    for(i in arguments){
        console.log(arguments[i])
    }
}
argumentsTeste(1, 2, 3, 4)
argumentsTeste()

