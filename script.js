const terminal = (num) =>{
    let banknotes = [100, 50, 20, 5, 1]
    let result = []
    if (num > 0){
        for (let i = 0; i < banknotes.length; i++){
            let note = banknotes[i]
            while(num - note >= 0){
                num -= note
                result.push(note)
            }
        }
    }else {
        console.log( "Please enter new num " )
    }
    return result
}
console.log(terminal(357))