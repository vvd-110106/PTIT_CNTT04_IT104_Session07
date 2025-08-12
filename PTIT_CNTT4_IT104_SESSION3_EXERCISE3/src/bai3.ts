abstract class Animal {
    public name: string;

    constructor (name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;

    printName(): void {
        console.log(` Tên: ${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log(`    Meo Meo`);
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log(`    Gâu Gâu`);
        
    }
}

let cat = new Cat ("Mèo vàng");
cat.printName();
cat.makeNoise();

let dog = new Dog ("Chó vàng");
dog.printName();
dog.makeNoise();