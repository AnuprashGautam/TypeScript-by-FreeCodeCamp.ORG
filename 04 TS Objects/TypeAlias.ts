type User={
    name:string,
    email:string,
    age:number,
    city:string
}

function createUser(user: User):User{
    return {
        name:"Name created",
        email:"Email created",
        age:0,
        city:"City added"
    }
}

type Point={
    x:number,
    y:number
}

const myPoint:Point={x:10,y:20};
console.log(`My point has the following x and y coordinates: ${myPoint.x} and ${myPoint.y}`);

// It is not recommended to use this concept on predefined type.
type MyString=string;
type bool=boolean;

