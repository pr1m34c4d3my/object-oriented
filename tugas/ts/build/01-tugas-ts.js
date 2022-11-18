"use strict";
let numbers = new Array(1, 1, 1, 3, 3, 2, 7, 7, 7, 9, 5, 11);
function ganjil(numbers, target) {
    let newNumber = numbers.filter((a) => a % 2 != 0).map((a) => a * target);
    return newNumber;
}
console.log(ganjil(numbers, 10));
