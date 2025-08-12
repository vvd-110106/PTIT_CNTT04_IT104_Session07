class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(` Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log(`    Meo Meo`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log(`    Gâu Gâu`);
    }
}
let cat = new Cat("Mèo vàng");
cat.printName();
cat.makeNoise();
let dog = new Dog("Chó vàng");
dog.printName();
dog.makeNoise();
