
import { Dog } from './dog';
import { Cat } from './cat';

let myFavNumber: number = 7;
let myFavDog: string = "Stark";

let isGoodDog: boolean = true;

let myDogNames: string[] = ["Stark", "Bella", "Toby"];
/* let myDog: object = {
    name: "Stark",
    age: 7
} */

function myFunction(message: string, myFavNumber: number) {
    console.log(`My fav number is ${myFavNumber} and my dog is ${message}`);
}

myFunction("Stark", 7);

let myDog = new Dog("Stark", 7);
let myCat = new Cat("Boots", 4);
myDog.speak();
myCat.speak();


