/**
 * fibonacci.js
 */


// ====Recursive====//

// const fibo = function(n){
//     if(n == 0 || n == 1)
//       return n;
//     return fibo(n - 1) + fibo(n - 2);
// };

// console.time("Execution time");
// console.log(`Recursivly: The ${n}th Fibonacci number is: ${fibo(n)}`);
// console.timeEnd("Excecution time");

//== Iterative===//
const fibo_iter = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let fib;
    let a = 0, b = 1, i = 2;
    while (n >= i) {
        fib = a + b;
        a = b;
        b = fib;
        i++;
    }
    return fib;
};
const n = 45;
console.time(`Execution Time`);
console.log(`Iteratively: The ${n}th Fibonacci number is: ${fibo_iter(n)}`);
console.timeEnd(`Execution Time`);