/**
 * exercise03
 * @author Abdulhamid
 * Date Oct 30,2021
 */
//  ## Exercise 03
//  Re-write the following code using TypeScript Class syntax. Try to be as explicit as possible and add Types to
// everything you can. When you are done, transpile the TS code to JS code and inspect the JS code.
//  ```javascript
//  class Car {
//      constructor(name) {
//          this.name = name;
//          this.acceleration = 0;
//      }
//      honk() {
//          console.log(` ${this.name} is saying: Toooooooooot!`);
//      }
//      accelerate(speed) {
//          this.acceleration = this.acceleration + speed;
//      }
//  }
//  let car = new Car("BMW");
//  car.honk(); // BMW is saying: Toooooooooot!
//  console.log(car.acceleration); // 0
//  car.accelerate(60);
//  console.log(car.acceleration); // 60
//  ```
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
        // this.acceleration = 0;
    }
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
car.accelerate(0);
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
