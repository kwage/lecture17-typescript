"use strict";
exports.__esModule = true;
var dog_1 = require("./dog");
var myFavNumber = 7;
var myFavDog = "Stark";
var isGoodDog = true;
var myDogNames = ["Stark", "Bella", "Toby"];
/* let myDog: object = {
    name: "Stark",
    age: 7
} */
function myFunction(message, myFavNumber) {
    console.log("My fav number is " + myFavNumber + " and my dog is " + message);
}
myFunction("Stark", 7);
var myDog = new dog_1.Dog("Stark", 7);
myDog.speak();
