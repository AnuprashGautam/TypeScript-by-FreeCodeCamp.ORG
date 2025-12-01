let connection: [string, string, boolean]=[
    "com.jdbc.mysql.Driver",
    "root",
    true
]

let rgb: [number, number, number]=[245, 222, 100];


// Bad Behaviour regarding tuple. We can change the tuple with the help of push() and pop().

type User=[number, string];

const newUser:User=[1, "Anuprash"];

// newUser[1]=true;
newUser.push(2);

console.log(newUser)