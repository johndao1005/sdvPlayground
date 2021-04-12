// input: "13:10"
// output: "1:30pm"
let input = '2:30'

function timeconvert(input) {
    let [hours, minutes] = input.split(':')
        //convert time
    if (hours > 12) {
        // checking if it is am or pm
        hours = hours - 12
            //also changing it into pm time
        return hours + minutes + 'pm'
    } else {
        return input + 'am'
    }
}
console.log(timeconvert(input))
    //can choose where to split