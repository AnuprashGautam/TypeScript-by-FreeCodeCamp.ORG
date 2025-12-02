var User = /** @class */ (function () {
    function User(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    return User;
}());
var u = new User("Anuprash", "anuprash@google.com", "Delhi");
console.log(u);
// u.address="Jaipur";
