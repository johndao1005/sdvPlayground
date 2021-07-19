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

// checking if the word is palindrome
function palindrome(str) {
    let re = /[a-zA-Z||0-9]/g
    let string = (str.toLowerCase()).match(re)
    return string.join('') == string.reverse().join('');
}

// roman number
function convertToRoman(num) {
    const roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    let result = ''
    for (let i of Object.keys(roman)) {
        let c = Math.floor(num / roman[i]);
        num -= c * roman[i];
        result += i.repeat(c)
    }
    return result
}

// Correct answers
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
function telephoneCheck(str) {
    let re = /^(1\s|1)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/g
    return re.test(str)
}


function rot13(str) {
    let result = []
    let arr = [...str]
    let re = /[\.\s\?\!]/
    arr.forEach(a => !re.test(a) ? result.push(String.fromCharCode(a.charCodeAt() <= 77 ? a.charCodeAt() + 13 : a.charCodeAt() - 13)) : result.push(a))
    return result.join("");
}

const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
}

function checkCashRegister(price, cash, cid) {
    let changeSum = cash - price;
    let changeSumCheck = changeSum
    let change = [];
    let status = '';

    let cidSum = 0;
    let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();

    filteredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1];
        cidSum += currSum;
        let amount = 0;
        while (changeSum >= currencyUnit[curr] && currSum > 0) {
            amount += currencyUnit[curr];
            changeSum -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
        }
        if (amount !== 0) {
            change.push([curr, amount]);
        }
    })
    if (changeSum > 0) {
        status = 'INSUFFICIENT_FUNDS'
        change = []
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
        status = "CLOSED"
        change = cid;
    } else {
        status = "OPEN"
        change
        cid
    }
    return { 'status': status, 'change': change }
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))