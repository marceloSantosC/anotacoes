const valor = 'Global'

function myFunc(){
    console.log(valor)
}

function myFunc2(){
    const valor = 'Local'
    // A função guarda o local onde ela foi definida, e tudo que está no seu entorno
    myFunc() // Será imprimido global
}

myFunc2()