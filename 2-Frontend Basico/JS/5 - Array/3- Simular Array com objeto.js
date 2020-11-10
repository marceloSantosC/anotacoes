const quaseArray = {0: 'Ana', 1: 'Rafael', 2: 'Patricia'}
Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this) },
    enumerable: false
})
console.log(quaseArray[1])
console.log(quaseArray.toString())
