function method1(parameter: number):number{
    return parameter;
}

function method2(parameter: string | number):string | number{
    if(typeof parameter === "string")
    {
        return parameter;
    }else if(typeof  parameter === "number")
    {
        return parameter;
    }
}

function method3(parameter:any):any{
    return parameter;
}

function method4<Type>(parameter: Type):Type{
    return parameter;
}

function method5<T>(parameter: T):T{
    return parameter;
}


class Toy{
    constructor(
        public brand: string,
        public price: number
    ) {
    }
}


// Custom Type based Generics example.

function showCase<T>(obj:T, count:number):T[]
{
    let result:T[]=[];

    for(let i:number=0; i<count; i++)
    {
        result.push(obj);
    }

    return result;
}

let toy:Toy=new Toy("ToyStoryBrandLimited", 4000);

console.log(showCase<Toy>(toy, 5));

console.log(showCase<string>("Hello World", 5));


// Generics in Array and Arrow Functions

function getSearchProduct1<T>(products:Array<T>, index:number):T{
    // Doing some complex calculations.
    return products[index];
}

const getSearchProduct2= <T>(products:Array<T>, index:number):T => {
    // Doing some complex calculations.
    return products[index];
}

console.log(getSearchProduct1<string>(["Anuprash","Anirudh", "Rachit"], 2));

console.log(getSearchProduct2<number>([100,200,300,400,500], 2));