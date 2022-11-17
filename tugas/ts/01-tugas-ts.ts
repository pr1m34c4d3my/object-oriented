let numbers: Array<number> = new Array(1, 1, 1, 3, 3, 2);

function count(numbers: Array<number>, target: number) {
  let newNumber: number = numbers
    .filter((a: number) => a % 2 != 0)
    .map((a: number) => a * target)
    .reduce((cum: number, cur: number) => cum + cur);
  return newNumber;
}
console.log(count(numbers, 10));
