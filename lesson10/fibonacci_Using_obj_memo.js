/**
 * fibonacci_Using_obj_memo.js
 */
// ====Recursive====//

const fibo = (function (n) {
    const memo = {};
    const calcFibo = function (n) {
        let fib;
        if (n in memo) {
            fib = memo[n];
        } else {
            if (n == 0 || n == 1)
                fib = n;
            else
                fib = calcFibo(n - 1) + calcFibo(n - 2);
            memo[n] = fib;
        }
        return fib;
    }
    return calcFibo;

})();
const n = 45;
console.time(`Execution Time`);
console.log(`Iteratively: The ${n}th Fibonacci number is: ${fibo(n)}`);
console.timeEnd(`Execution Time`);