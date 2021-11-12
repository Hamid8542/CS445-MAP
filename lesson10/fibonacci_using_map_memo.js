/**
 * fibonacci_Using_map_memo.js
 */
// ====Recursive====//

const fibo = (function (n) {
    const memo = new Map();

    const calcFibo = function (n) {
        let fib;
        let memoraizedValue = memo.get(n);

        if (memoraizedValue) {
            fib = memoraizedValue;
        } else {
            if (n == 0 || n == 1)
                fib = n;
            else
                fib = calcFibo(n - 1) + calcFibo(n - 2);
            memo.set(n, fib);
        }
        return fib;
    }
    return calcFibo;

})();
const n = 45;
console.time(`Execution Time`);
console.log(`Iteratively: The ${n}th Fibonacci number is: ${fibo(n)}`);
console.timeEnd(`Execution Time`);