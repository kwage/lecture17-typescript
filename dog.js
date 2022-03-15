"use strict";
exports.__esModule = true;
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.speak = function () {
        console.log("Bark!");
    };
    return Dog;
}());
exports.Dog = Dog;
