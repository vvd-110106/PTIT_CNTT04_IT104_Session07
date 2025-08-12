class Account {
    constructor(accountNumber) {
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp tiền: +${amount} - Số dư: ${this.balance}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút tiền: -${amount}- Số dư: ${this.balance}`);
        }
    }
    showHistory() {
        console.log(` Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach(record => console.log(record));
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, overdraftLimit) {
        super(accountNumber);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount > 0 && this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            this.history.push(` Rút: -${amount} VNĐ - Số dư: ${this.balance} VNĐ`);
        }
        else {
            this.history.push(` Rút tiền không thành công:`);
        }
    }
}
let acc = new CheckingAccount("STK8386", 800);
acc.deposit(1000);
acc.withdraw(1200);
acc.withdraw(800);
acc.showHistory();
