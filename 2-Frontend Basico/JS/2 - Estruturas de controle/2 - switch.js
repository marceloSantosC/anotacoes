let numRan = Math.random().toFixed(2)
console.log(numRan)

switch(numRan){
    case 0.1:
    case 0.2:
    case 0.3:
    case 0.4:
    case 0.5:
        console.log('0.5 >= numRan >= 0.1'); // Será executado em qualquer um dos casos acima
        break  // O switch para de executar quando executar o código
    case 0.6:
    case 0.7:
    case 0.8:
    case 0.9:
    case 1:
        console.log('1 >= numRan >= 0.6');
        break
    default:
        console.log('default');
}