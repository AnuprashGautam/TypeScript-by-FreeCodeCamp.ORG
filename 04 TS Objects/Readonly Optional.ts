// Readonly: We can't change the value.

// Optional(?): It is not must to provide the value.

type UserDetails={
    readonly _id:number,
    name:string,
    email:string,
    city:string,
    creditCardDetail?:string
}

const user:UserDetails={
    _id:1,
    name:"Anuprash",
    email:"anup@test.com",
    city:"Meerut"
}

// user._id=2;


// Use & sign to combine multiple types together.

type CreditCardNumber={
    creditCardNumber:number
}

type CvvNumber={
    cvvNumber:number
}

type CreditCardDate={
    date:string
}

type CreditCard=CreditCardNumber & CvvNumber & CreditCardDate & {
    company:string
}

const myCard:CreditCard={
    creditCardNumber:123456789,
    cvvNumber:123,
    date:"12/12/2030",
    company:"Visa"
}

console.log(myCard);