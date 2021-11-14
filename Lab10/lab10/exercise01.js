// ## Exercise 01
// Implement Factory Method pattern to create two types of light bulbs: regular bulbs and energy saver bulbs. 
// * Regular bulbs have a range of lumens between 50 and 100 and last for 1 year. 
// * Energy saver bulbs have a range of lumens between 5 and 40 and last for 10 years and comes in multiple colors.

// **When you finish, you can use the code below to test:**
// ```javascript
// const bulbs = [];
// const factory = new Factory();

// bulbs.push(factory.createBulb("regular"));
// bulbs.push(factory.createBulb("energy", "red"));


// for (let i = 0, len = bulbs.length; i < len; i++) {
//     console.log(bulbs[i]);
// }
// ```

class Regular {
    constructor() {
        this.range = [50, 100];
        this.age = 1;
    }
}

class Energy {
    constructor() {
        this.range = [5, 40];
        this.age = 10;
    }
}

class Factory {
    createBulb(type) {
        let bulb;

        if (type === "regular") {
            bulb = new Regular();
        } else if (type === "energy") {
            bulb = new Energy();
        }

        return bulb;
    }
}


const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}

// output:
// Regular { range: [ 50, 100 ], age: 1 }
// Energy { range: [ 5, 40 ], age: 10 }