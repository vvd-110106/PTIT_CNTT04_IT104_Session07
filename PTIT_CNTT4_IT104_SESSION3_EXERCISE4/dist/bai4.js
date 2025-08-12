class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(` Tên: ${this.name}`);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(` Tên sinh viên: ${this.name}`);
        console.log(` Mã sinh viên : ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(` Tên giảng viên: ${this.name}`);
        console.log(` Môn giảng dạy : ${this.subject}`);
    }
}
let std = new Student("Đoàn", 213);
std.displayInfo();
let teacher = new Teacher("Phạm Tuấn Bình", "IT 104");
teacher.displayInfo();
