//  Q3. Create a method named newReversed() method which will reverse elements in an Array. Make sure this 
// Method is avaialable for only Array Objects which means can call code below. in the code below,  this newReverse()
// method runs synchronously.

 console.log(`start`);
 [1, 3, 6, 2].newReversed();
 console.log(`end`);
  
//  Output:
//  start
//  [2, 6, 3, 1]
//  end
let array1 = [1, 3, 6, 2];
Array.prototype.newReversed = function() {
    const newReversed = array1.reverse();
    console.log('newReversed:', newReversed);
   
}

Array.prototype.newReversed =  function() {
    console.log(newReversed);
}
//================================================================
// console.log(`start`);
// [1, 3, 6, 2].newReversed();
// console.log(`end`);

// Output:
// start
// end
// [4, 1, 5, 7, 2, 3, 6]



//  Rewrite the method named newReverseAsynch() Using Two ways: Promise and Asynch&wait. After you finished, you can 
//  make a call and the output is like below:
 
//  Note: You are free to add extra methods. using any existing built-in javascript APIs
 
//  console.log(`start`);
//  [1, 3, 6, 2].newReverse();
//  console.log(`end`);
 
//  Output:
//  start
//  end
//  [2, 6, 3, 1] 

//     let arr = [1, 3, 6, 2];
//     console.log(`start`);
//     // [1, 3, 6, 2].newReverse();
//     // console.log(arr);
//     newArray = [1, 3, 6, 2].reverse();
//    //  arr.reverse();
//     console.log(newArray);
//     console.log(`end`);
//==========================================================  
    // Array.prototype.newReverseaAsync = function() {
    //     let arr = this;
    //     new Promise(function(resolve, reject) {
    //         resolve([...new Set(arr)]);
    //     }).then(console.log);
    // }
    
    // Array.prototype.newReverseaAsync = async function() {
    //     console.log(await [...new Set(this)]);
    // }
    
    // console.log(`start`);
    // [1, 3, 6, 2].newReverseaAsync();
    // console.log(`end`);
