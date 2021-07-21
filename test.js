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

console.log(Convert12to24('12:30'))

function checkFormat(input) {
    if (input)
        return false
}

function is12time(time) {
    if (!checkFormat(time)) {
        return Error('Invalid format')
    }
    let re = /am|pm/;
    if (re.test(time)) {
        return Convert24To12(time)
    }
    return Convert12to24(time)
}
console.log(is12time('6:30'))