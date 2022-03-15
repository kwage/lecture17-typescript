import { Pet } from './pet';

export class Dog implements Pet {

    name: string;
    age: number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(message: string) {
        console.log(message);
    }

    rollOver() {
        console.log("Did it!");
    }


}