class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getInfo() {
        console.log(` Tên nhân viên: ${this.name}`);
        console.log(` Tên công ty: ${this.company}`);
        console.log(` Số điện thoại: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    getInfo() {
        super.getInfo();
        console.log(` Số thành viên: ${this.teamSize}`);
    }
}
let manager = new Manager("Quyền", "Hola", "0123456789", 10);
let manager1 = new Manager("Đoàn", "Hola", "0123456789", 10);
manager.getInfo();
manager1.getInfo();
