/**
 * index.js
 */

import { Observable, of, from, interval, fromEvent } from "rxjs";
import {take , map, filter, reduce} from "rxjs/operators";

// //Example 1: Manually create Observable data

// const helloWorldObservable = Observable.create(observer => {
//     observer.next("Hello");
//     observer.next("World");
// });

//  helloWorldObservable.subscribe(val => console.log(val));

// //Example 2: Manually create Observable data using 'of' operator

// const helloWorldObservable2 = of("Hello2", "World2");
// helloWorldObservable2.subscribe(val => console.log(val));

// //Example 3: Observable data from Promise

// const helloWorldPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello World"), 2000);
// });

// const helloWorldPromiseObservable = from(helloWorldPromise);
// helloWorldPromiseObservable.subscribe(val => console.log(val));

// // Example 4: Observable data from array

// const arrayObservable = from([1, 2, 3]);
// arrayObservable.subscribe(n => console.log(n));

// Example 5: Observable data emitted from an interval

// const intervalNumbersObservable = interval(1000);
// const takeFirstFiveNumbersObservable = intervalNumbersObservable.pipe(take(5));
// takeFirstFiveNumbersObservable.subscribe(n => console.log(n));
// takeFirstFiveNumbersObservable.subscribe(n => console.log(new Date()));


// // Example 6: Observable data from array using map etc;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayNumbersObservable = from(numbers);
// const squaresNumbersObservable = arrayNumbersObservable.pipe(map(n => (n * n)));
// squaresNumbersObservable.subscribe(squareOfNumber => console.log(squareOfNumber));

// // Example 7: Observable data from array using filter, reduce etc;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayNumbersObservable = from(numbers);
// const evenNumbersObservable = arrayNumbersObservable.pipe(filter(n => n % 2 == 0));
// evenNumbersObservable.subscribe(evenNumbers => console.log(evenNumbers));

// Example 8: Observable data from array using  reduce etc;
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arrayNumbersObservable = from(numbers);
// const sumNumbersObservable = arrayNumbersObservable.pipe(reduce((acc, val) => (acc + val)));
// sumNumbersObservable.subscribe(sum => console.log(sum));


// const { fromEvent } = rxjs;
const node = document.getElementById("search");
//create observable that emits click eventsconst 
inputObs = fromEvent(node, 'input');
inputObs.subscribe({
    next: event => console.log(`You just typed ${event.target.value}!`),
    error: err => console.log(`Oops... ${err}`),
    complete: () => console.log(`Complete!`),
});

// const observer = {
//         next: x => console.log('Observer got a next value: ' + x),
//         error: err => console.error('Observer got an error: ' + err),
//         complete: () => console.log('Observer got a complete notification'),
//     };
//     // To use the Observer, provide it to the subscribe of an Observable:
//      observable.subscribe(observer);