import { Pet } from "./pet";

export class Cat implements Pet {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    speak(message: string) {
        console.log(message);
    }
}