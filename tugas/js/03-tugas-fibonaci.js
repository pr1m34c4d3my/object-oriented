let number;
let fib = [0, 1];

for (i = 2; i <= 100; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];

  console.log(fib[i]);
}
