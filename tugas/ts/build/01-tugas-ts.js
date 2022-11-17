"use strict";
let numbers = new Array(1, 1, 1, 3, 3, 2);
function count(numbers, target) {
    let newNumber = numbers
        .filter((a) => a % 2 != 0)
        .map((a) => a * target)
        .reduce((cum, cur) => cum + cur);
    return newNumber;
}
console.log(count(numbers, 10));
