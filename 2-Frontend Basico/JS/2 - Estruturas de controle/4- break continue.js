for(let i = 0; i < 10; i++){
    let b = 1
    b += i
    if(i == 5) {
        console.log(b)
        break
    }
}

for(let i = 0; i < 10; i++){
    if(i == 5) {
        continue
    }
    console.log(i)
}