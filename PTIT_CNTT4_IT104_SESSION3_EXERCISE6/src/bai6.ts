class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor (id: number, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }

    public login(): void {

    }
     public logout(): void {
        if (this.isLogin) {
            console.log(" Đã đăng xuất");
            this.isLogin = false;
        }
     }
}

class userAcc extends Account {
    status: string;
    constructor (id: number, userName: string, password: string,isLogin: boolean, role: string, status: string) {
        super(id, userName,password,isLogin, role);
        this.status = status;
    }
    login(): void {
        if (this.status === "active") {
            console.log(" Đăng nhập thành công");
            this.isLogin = true;
        } else {
            console.log(" Tài khoản đã bị khoá");
        }
    }
 
}

class adminAcc extends Account {
    banUser(userId: number, userLisst: userAcc[]): void {
        let user = userLisst.find(u => u.id === userId);
        if (user) {
            user.status = "banned";
            user.isLogin = false;
            console.log(`Đã khoá tài khoản`);
        } else {
            console.log(`Khoong tìm thấy user có id: ${userId}`);
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

let allUsers: userAcc[] = [user1, user2];

let admin = new adminAcc (100, "Admin", "admin123", true, "admin");
admin.banUser(2, allUsers);