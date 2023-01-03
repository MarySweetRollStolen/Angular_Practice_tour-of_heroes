export class User {
    private id: number;
    private username: string;
    private email: string;
    private password: string;

    constructor(id: number, username: string, email: string, password: string) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }

}
