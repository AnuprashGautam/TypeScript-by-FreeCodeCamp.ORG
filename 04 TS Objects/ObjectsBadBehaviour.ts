// Setting the object type parameter safety for a function

function objectParameterSafety({name: string, email: stirng, age: number}){

}


// Setting the object type return safety for a function

function objectReturnSafety():{name: string, email: string, age: number}{
    return {
        name: "Anuprash Gautam",
        email: "anuprash@test.com",
        age: 12
    }
}


// Object's bad behaviour

objectParameterSafety({name:"Anuprash", email:"anuprash@test.com", age:12});

// We can't do so. We will have to pass the exact parameter object.
// objectParameterSafety({name:"Anuprash", email:"anuprash@test.com", age:12, city:"Meerut"});

// But we are able to pass the same data via a variable.
const user={name:"Anuprash", email:"anuprash@test.com", age:12, city:"Meerut"};
objectParameterSafety(user);