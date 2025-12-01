let greetings: string= "Hello Anuprash, Good Morning";
console.log(greetings.toLowerCase());


// number

let num: number= 10;
let num1: number= 10.23;

console.log(num);
console.log(num1);


// boolean

let isLoggedIn: boolean =false;
console.log(isLoggedIn);


// Type Inference: The ability of a language to detect the type of the variable automatically.

let isActive=false;
console.log(isActive);


// any

let functionReturns:any;

function randomFunction()
{
    // Programmer may return anything.
    // return "Hello";
    // return false;
    return 10;
}

functionReturns=randomFunction();
