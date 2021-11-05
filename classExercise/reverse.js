
//Q1. Create a method named newReverse() method which will reverse elements in an Array.Make sure this method is available
// for only Array objects which means can call like code below.In the code below, this newReverse()  method runs synchronously.

// console.log(`start`);
// [1, 3, 6, 2].newReverse();
// console.log(`end`);

// Output:
// start
// [ 2, 6, 3, 1 ]
// end

// Array.prototype.newReverse = function () {
//     //Reverse in-place
//     let i = 0;
//     let j = this.length - 1;
//     while (i < j) {
//         // swapping 
//         const temp = this[i];
//         this[i] = this[j];
//         this[j] = temp;
//         i++;
//         j--;  // j = j - 1;
//     }
//     console.log(this);
// }
// console.log(`start`);
// [1, 3, 6, 2].newReverse();
// console.log(`end`);

// /// ------------------------- ///

//Q2. Rewrite the method, name it: newReverseAsync() and using Two ways: Promise and Aysnc&Await. 
// After you finish, you can make a call like this:

// console.log(`start`);
// [1, 3, 6, 2].newReverseAsync();
// console.log(`end`);

// and the output should be like below:

// Output:
// start
// end
// [ 2, 6, 3, 1 ]

//Alternative , implement reverse using auxlary array
// Array.prototype.newReverse2 = function () {
//     //Reverse using auxilary array
//     let revArr = [];
//     // let i = this.length - 1;
//     // while (i >= 0) {

//     //     revArr.push(this[i]);
//     //     i--;
//     // }
//     for (let i = this.length - 1; i >= 0; i--){
//         revArr.push(this[i]);
//     }

//     console.log(revArr);
// }
// console.log(`start`);
// [1, 3, 6, 2].newReverse2();
// console.log(`end`);

//Q2 Async method
// reverse-array-async-promise.js

// Array.prototype.newReverseAsync = function () {

//     new Promise((resolve, reject) => {
//         let i = 0;
//         let j = this.length - 1;
//         while (i < j) {
//             // swapping 
//             const temp = this[i];
//             this[i] = this[j];
//             this[j] = temp;
//             i++;
//             j--;  // j = j - 1;
//         }
//         resolve(this);
//     }).then(console.log);
// };

// console.log(`start`);
// [1, 3, 6, 2].newReverseAsync();
// console.log(`end`);

//Q3. AsyncAwait
// reverse-array-async-await.js
Array.prototype.newReverseAsync = async function () {
    const revArr = await reverseAsyncArrayInplaceAsyncHelper(this);
    //  const revArr = await this.reverse;
    console.log(revArr);
};
async function reverseAsyncArrayInplaceAsyncHelper(array) {

    let i = 0;
    let j = array.length - 1;
    while (i < j) {
        // swapping 
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;  // j = j - 1;
    }
    return array;
}

console.log(`start`);
[1, 3, 6, 2].newReverseAsync();
console.log(`end`);

// NOTE: You're free to add/use extra helper methods, or use any existing built-in JavaScript APIs.

