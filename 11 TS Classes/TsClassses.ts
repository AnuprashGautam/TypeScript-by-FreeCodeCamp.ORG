class User{
    name:string;
    email:string;
    readonly address:string;

    constructor(name:string, email:string, address:string) {
        this.name=name;
        this.email=email;
        this.address=address;
    }
}

const u = new User("Anuprash", "anuprash@google.com","Delhi");
console.log(u);

// u.address="Jaipur";
