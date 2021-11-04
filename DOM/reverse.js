//  Q3. Create a method named newReversed() method which will reverse elements in an Array. Make sure this 
// Method is avaialable for only Array Objects which means can call code below. in the code below,  this newReverse()
// method runs synchronously.

 console.log(`start`);
 [1, 3, 6, 2].newReverse();
 console.log(`end`);
 

 
//  Output:
//  start
//  [2, 6, 3, 1]
//  end
 


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

    let arr = [1, 3, 6, 2];
    console.log(`start`);
    // [1, 3, 6, 2].newReverse();
    // console.log(arr);
    newArray = [1, 3, 6, 2].reverse();
   //  arr.reverse();
    console.log(newArray);
    console.log(`end`);
  
   
