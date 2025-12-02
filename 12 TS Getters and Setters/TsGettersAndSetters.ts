interface Address {
    street: string,
    colony: string,
    city: string,
    county: string
}

class Employee {
    constructor(
        public name: string,
        public age: number,
        public address: Address,
        private securityPin: number = 1234,
        readonly salary: number
    ) {}

    getSecurityPin(): number {
        return this.securityPin;
    }

    setSecurityPin(newSecurityPin: number): void {
        this.securityPin = newSecurityPin;
    }
}

// Address Object
const address: Address = {
    street: "A2Z street",
    colony: "Shyam Vihar",
    city: "Meerut",
    county: "India"
};

// Correct Employee Creation
const employee: Employee = new Employee(
    "Arun",      // name
    23,          // age
    address,     // address
    1234,        // optional (default applied if removed)
    50000        // salary
);

console.log(employee);
console.log(employee.setSecurityPin(9875));
console.log(employee.getSecurityPin());
