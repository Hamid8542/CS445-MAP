/**
 * app.ts
 * @author Abdulhamid
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
var ColorName;
(function (ColorName) {
    ColorName["Red"] = "Red";
    ColorName["Green"] = "Green";
    ColorName["Blue"] = "Blue";
})(ColorName || (ColorName = {}));
;
var c2 = ColorName.Red;
console.log(c2);
