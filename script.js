// const terminal = (num) =>{
//     let banknotes = [100, 50, 20, 5, 1]
//     let result = []
//         for (let i = 0; i < banknotes.length; i++){
//             while(num - banknotes[i] >= 0){
//                 num -= banknotes[i]
//                 result.push(banknotes[i])
//             }
//         }
//     return result
// }
// console.log(terminal(357))

function atm(sum) {
    let banknotes = [100, 50, 20, 5, 1]
    let result = []
    for(let i = 0; i < banknotes.length; i++){
        let note = Math.floor(sum / banknotes[i])
        sum %= banknotes[i]
        let newArray = Array(note).fill(banknotes[i])
        result = [...result, ...newArray]
    }
    return result
}
console.log(atm(357))