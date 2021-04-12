// input: "13:10"
// output: "1:30pm"
let input = '18:30'
    //ANCHOR need to add some restrain function

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
const timeconvert = (input) => {
    [hours, minutes] = input.split(':')
    return hours > 12 ? (hours - 12) + ':' + minutes + 'pm' : input + 'am'
}
console.log(timeconvert(input))
    //can choose where to split