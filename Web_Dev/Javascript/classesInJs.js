// classes are blueprint

class Animal
{

    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
    }

    speak() {
        console.log("Hello")
    }
}

let dog = new Animal("dog",2);