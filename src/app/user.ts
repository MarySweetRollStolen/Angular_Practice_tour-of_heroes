export class User {
    public id: number;
    public username: string;
    public email: string;
    public password: string;
    public isAdmin: boolean;

    constructor(id: number, username: string, email: string, password: string, isAdmin?: boolean) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.isAdmin = false;
    }

    
}
