class Account {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.history = [];
        this.status = "active";
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp tiền: +${amount}- Số dư: ${this.balance}`);
        }
    }
    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount} -Số dư: ${this.balance}`);
        }
    }
    showHistory():void {
        console.log(` Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach(record => console.log(record));
    }
}

class SavingAccount extends Account {
    public interestRate: number;

    constructor (accountNumber: string, interestRate: number) {
        super(accountNumber)
        this.interestRate = interestRate;
    }
    withdraw(amount: number): void  {
        if(amount > 0) {
            if(amount >= this.balance) {
                this.history.push(` Rút hết tiền: -${this.balance} VNĐ - Số dư: 0 VNĐ`);
                this.balance = 0;
            } else {
                this.balance -= amount;
                this.history.push(` Rút: -${amount} VNĐ - Số dư: ${this.balance} VNĐ`);
            }
        }
    }
}

let acc = new SavingAccount("STK0123", 0.03);
acc.deposit(1000);
acc.withdraw(350);
acc.withdraw(950);
acc.showHistory();