interface User{
    readonly id:number,
    name:string,
    city:string,
    age:number,
    creditCard?:string,

    // We can add the methods too in the interfaces.
    getUserDetails():string,
    getUserAcademicsDetails: ()=>string,
    setUserPersonalDetails(personalDetails:string):boolean
}


let newUser:User={
    id:1,
    name:"Anuprash",
    city:"Hyderabad",
    age:24,
    creditCard:"Yes, I have one credit card.",
    address:"101, Hyderabad, India",
    getUserAcademicsDetails: ()=>{
        return "He is a marvelous student."
    },
    getUserDetails(): string {
        return "I am returning the user details."
    },
    setUserPersonalDetails(personalDetails: string): boolean {
        return true;
    }
}

console.log(newUser);


// We can reopen the interface.

interface User{
    address: string
}

// Inheritance in interface

interface Admin extends User{
    role: "Admin"|"QA"|"Developer"
}
