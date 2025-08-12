class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login() {
    }
    logout() {
        if (this.isLogin) {
            console.log(" Đã đăng xuất");
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            console.log(" Đăng nhập thành công");
            this.isLogin = true;
        }
        else {
            console.log(" Tài khoản đã bị khoá");
        }
    }
}
let user1 = new userAcc(1, "Quyền", "123456", false, "nam", "banned");
console.log("Tài khoản 1 isLogin = false");
user1.login();
user1.logout();
let user2 = new userAcc(2, "Đoàn", "123456789", true, "nam", "active");
console.log("Tài khoản 2 isLogin = true");
user2.login();
user2.logout();
