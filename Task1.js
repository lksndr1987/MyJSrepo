'use strict';

let str1 = '10000101';
let str2 = '1021';
function isGood(number) {
    return number == 0 || number == 1
}

function conversion(a) {
    let arr = a.split('');

    let result = 0;
    if (arr.every(isGood)) {
        arr.forEach(function (item, i, arr) {
            result += Number(item) * 2 ** (arr.length - i - 1);
        });
    }
    else result = undefined;

    return result;
}
console.log('\nString 1: ' + str1 + ', Result: ' + conversion(str1));
console.log('\nString 2: ' + str2 + ', Result: ' + conversion(str2) + '\n');