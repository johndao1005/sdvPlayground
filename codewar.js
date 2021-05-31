// change array or name into common sense sentence like Bar, Beer and John
function list(names) {
    return names.reduce(function(prev, current, index, array) {
        if (index === 0) {
            return current.name;
        } else if (index === array.length - 1) {
            return prev + ' & ' + current.name;
        } else {
            return prev + ', ' + current.name;
        }
    }, '');
}

//find 1 unique number
function findUniq(arr) {
    let result = arr.filter(x => x !== arr[0])
    return result.length > 1 ? arr[0] : result

}

function findUniq2(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

//counting vowels
function getCount(str) {
    let re = /[aoieu]/g;
    str.match(re);
    return str.match(re).length;
}

//return sum of of all the number from a to b or reverse 
function getSum(a, b) {
    if (a === b) return a;
    let result = 0;
    let sum = (i, max) => {
        for (; i <= max; i++) {
            result += i
        }
        return result
    }
    return a > b ? sum(b, a) : sum(a, b)
}

const flip = (d, arr) => {
    let result = []
    if (d === 'L') {
        arr.sort((a, b) => a - b)
    } else if (d === 'R') {
        arr.sort((a, b) => b - a)
    }
    return arr
}

var uniqueInOrder = function(iterable) {
    //your code here - remember iterable can be a string or an array
    let result = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            result.push(iterable[i]);
        }
    }
    return result
}
console.log(uniqueInOrder('aaabbbaaabcbcbcbcbbbbbb'))