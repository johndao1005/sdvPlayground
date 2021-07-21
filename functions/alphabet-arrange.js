//input string 'bca'
//output string 'abc'
// take a string
//     check if it length is 1 then return it
//     if not then working with loop to reverse it
//         empty array 
//          convert all the elemnent into charcode with js
//arrange the number in order of charcode
//     convert it back in to alphabet
function alphabetArrangement(string) {
    return ([...string].sort()).reduce((a, b) => a + b)
}
console.log(alphabetArrangement('alalalal3125bbbcccc161246543!@#$@^*%^$#al'))