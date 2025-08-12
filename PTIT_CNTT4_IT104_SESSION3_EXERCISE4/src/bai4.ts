abstract class Person {
    public name: string;

    constructor (name: string) {
        this.name = name;
    }
    displayInfo(): void {
        console.log(` Tên: ${this.name}`);
    }
}

class Student extends Person {
    id: number;
    constructor (name: string, id: number) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(` Tên sinh viên: ${this.name}`);
        console.log(` Mã sinh viên : ${this.id}`);
    }
}

class Teacher extends Person {
    subject: string;
    constructor (name: string, subject: string) {
        super(name);
        this.subject = subject;
    }

    displayInfo(): void {
        console.log(` Tên giảng viên: ${this.name}`);
        console.log(` Môn giảng dạy : ${this.subject}`);
    }
}

let std = new Student ("Đoàn", 213);
std.displayInfo();

let teacher = new Teacher("Phạm Tuấn Bình", "IT 104");
teacher.displayInfo();