type User={
    id:number,
    name:string,
    accountType:string
}

type Admin={
    name:string,
    accountType:string
    power:string
}

// Now a user can be anyone of the above types.
const newUser: User | Admin={
    id:1,
    name:"Anuprash",
    accountType:"Normal",
    power:"Access Data"
}

console.log(newUser)

// If we are using the union in parameters then we have to check for the parameter type explicitly with if and then apply the business logic.

function getDBId(id: number | string): string
{
    if(typeof id ==="string")
    {
       return  id.toLowerCase();
    }
    return id+"";
}

// We can set the fixed values that we can pass to a variable.

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment="aisle";
seatAllotment="middle";
seatAllotment="window";
console.log(seatAllotment);


// Suppose if we want an array containing the string, number and boolean type values.

// let arr : string | number |boolean []=["Anuprash", 1, true];
// let arr : string[] | number[] |boolean []=["Anuprash", 1, true];
let arr : (string | number |boolean)[]=["Anuprash", 1, true];

console.log(arr)