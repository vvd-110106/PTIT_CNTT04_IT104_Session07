class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 5;
    }
    speedUp() {
        this.speed += 15;
    }
    showSpeed() {
        console.log(` Tốc độ hiện tại là: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(` Tên xe: ${this.name}`);
        console.log(` Tốc độ: ${this.speed}`);
        console.log(` id: ${this.id}`);
        console.log(` Số bánh: ${this.gear}`);
    }
}
let bicycle1 = new Bicycle("Xe máy điện", 9, 1, 2);
bicycle1.speedUp();
console.log(`Sau khi tăng`);
bicycle1.showSpeed();
bicycle1.slowDown();
console.log(`Sau giảm`);
bicycle1.showSpeed();
console.log(`Tốc độ hiện tại`);
bicycle1.showSpeed();
console.log("Thông tin đầy đủ");
bicycle1.showInfo();
