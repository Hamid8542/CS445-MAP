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

class Car {
    name: string;
    acceleration: number = 0;
    
constructor(name: string) {
    this.name = name;
    this.acceleration = 0;
   }

honk(): void {
    console.log(` ${this.name} is saying: Toooooooooot!`);
}
accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
}
}

let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!

car.accelerate(0);
console.log(car.acceleration); // 0


car.accelerate(60);
console.log(car.acceleration); // 60