class Employee {
    public name: string;
    protected company: string;
    private phone: string;

    constructor (name:string, company: string, phone: string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getInfo(): void {
        console.log(` Tên nhân viên: ${this.name}`);
        console.log(` Tên công ty: ${this.company}`);
        console.log(` Số điện thoại: ${this.phone}`);
    }
}

class Manager extends Employee {
    teamSize: number;
    constructor (name: string, company: string, phone: string, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }

    getInfo(): void {
        super.getInfo();
        console.log(` Số thành viên: ${this.teamSize}`);
    }
}
let manager = new Manager ("Quyền", "Hola", "0123456789", 10);
let manager1 = new Manager ("Đoàn", "Hola", "0123456789", 10);
manager.getInfo();
manager1.getInfo();