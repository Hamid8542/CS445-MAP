// A Promise object serves as a link between the executor and the consuming functions, which will receive the result or error.
// Consuming functions can be registered(subscribed) using methods.then, .catch and.finally.

let promise = new Promise(function(resolve, reject) {
    const random = Math.random();
    console.log('random: ', random);
    if (random > 0.5) {
        setTimeout(() => resolve("done!"), 1000);
    } else {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
    }
});
promise.then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Promise ready!"));

//==========================================================

let promise1 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000); // (*)
})
    promise1.then(function (result) { // (**)
    // alert(result); // 1
    console.log(result);  // 1
    return result * 2;
})
    promise1.then(function (result) { // (***)
    // alert(result); // 2
    console.log(result);  // 2
    return result * 2;
    })
    promise1.then(function (result) {
    // alert(result); // 4
    console.log(result);  // 4
    return result * 2;
});
