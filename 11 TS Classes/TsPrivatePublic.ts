class User{
    readonly address:string="India";

    constructor(public name:string, private email:string) {
    }
}

const u = new User("Anuprash", "anuprash@google.com");
console.log(u);

// console.log(u.email);        // This is private property.
// u.address="Delhi";           // Can't change readonly property.
