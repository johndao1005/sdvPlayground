// input: "13:10"
// output: "1:30pm"
let input = '11:00'
    //ANCHOR need to add some restrain function
    //check the time is correctly input not 24:99
function checkFormat(input) {
    let [hours, minutes] = input.split(':')
    let remain = 0
    if (minutes >= 60) {
        remain = minutes % 60
        hours = Number(hours) + (minutes - remain) / 60
    }
    return hours > 24 || (hours == 24 && minutes > 0) ? 'need to be under 24h' : minutes < 60 ? input : remain > 9 ? hours + ':' + remain : `${hours}:0${remain}`
}
console.log(checkFormat(input))

//ANCHOR original function
// function timeconvert(input) {
//     let [hours, minutes] = input.split(':')
//convert time
//     if (hours > 12) {
// checking if it is am or pm
//         hours = hours - 12
//also changing it into pm time
//         return hours + minutes + 'pm'
//     } else {
//         return input + 'am'
//     }
// }
//ANCHOR factoried function

const Convert12to24 = (input) => {
        [hours, minutes] = input.split(':')
        return hours > 12 ? (hours - 12) + ':' + minutes + 'pm' : input + 'am'
    }
    //can choose where to split

// Convert 12 to 24
// split the string into hour minute and am or pm 
// checking if it is am then print hour and minute
// else print hour +12 + minutes

function Convert24To12(time) {
    let [hours, secondPart] = time.split(':')
    let minutes = [...secondPart].splice(0, 2).join('')
    let amPm = [...secondPart].splice(2, 2).join('')
    return amPm === 'pm' ? hours == 12 ? 0 + ':' + minutes : (+hours) + 12 + ':' + minutes : hours + ':' + minutes
}

// function ConvertHours(time){
//     let result =[...time]
//     result
// }

console.log(Convert24To12('12:12pm'))

console.log(Convert12to24(input))