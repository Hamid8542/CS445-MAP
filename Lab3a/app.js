/**
 * app.ts
 * @author Abdulhamid Ibrahim
 * @since 2021-10-28
 */
//  Invoke the calculateAverage(...) function, passing it the following inputs:
//  - [17, 9, 4, 82, 15, 36]
//  - [9, 4, 1, 7, 2, 3, 5, 8, 10, 6]
// - For each of the above input array, print the computed average to the console. 
// - Format each of your outputs as: 
//  The Average of [17, 9, 4, 82, 15, 36] is 27.17
//  The Average of [9, 4, 1, 7, 2, 3, 5, 8, 10, 6] is 5.50
var array = [17, 9, 4, 82, 15, 36];
function calculateAverage(arr) {
    var total = 0;
    var count = 0;
    array.forEach(function (item, index) {
        total += item;
        count++;
    });
    return (total / count).toFixed(2);
}
console.log("The Average of " + [17, 9, 4, 82, 15, 36] + " is " + calculateAverage(array));
// console.log("The Average of " + [9, 4, 1, 7, 2, 3, 5, 8, 10, 6] + " is " + calculateAverage2(array));

var array2 = [9, 4, 1, 7, 2, 3, 5, 8, 10, 6];
function calculateAverage2(arr2) {
    var total2 = 0;
    var count2 = 0;
    array2.forEach(function (item, index) {
        total2 += item;
        count2++;
    });
    return (total2 / count2).toFixed(2);
}
console.log("The Average of " + [9, 4, 1, 7, 2, 3, 5, 8, 10, 6] + " is " + calculateAverage2(array2));

// Task4: Given below is a set of declarations and initialization of constants for Tax rates used in a Payroll application.
//     const FICA = 10;
//     const STATE = 5;
//     const MEDICARE = 12;
// Using TypeScript, write code to declare these constants as part of an enum type.
