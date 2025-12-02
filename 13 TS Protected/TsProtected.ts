class Employee{
    constructor(
        protected empId:number
    ) {
    }
}

class Manager extends  Employee{
    revealEmployeeId():string
    {
        return `This is my id: ${this.empId}`;
    }
}

const manager:Manager=new  Manager(101);
console.log(manager.revealEmployeeId());
// console.log(manager.empId);