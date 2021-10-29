/**
 * app.ts
 * @author Abdulhamid
 */
enum Color {
    Red,
    Green,
    Blue
};

let c: Color = Color.Red;
console.log(c);

enum ColorName {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
};

let c2: ColorName = ColorName.Red;
console.log(c2);