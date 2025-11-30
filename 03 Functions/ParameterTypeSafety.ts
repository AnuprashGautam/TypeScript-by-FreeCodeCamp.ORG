function iTakeString(str: string)
{
    return str.toUpperCase();
}

function iTakeNumber(num: number)
{
    return num;
}

console.log(iTakeNumber(10));
console.log(iTakeString("hello world"));


function authorizeUser(username:string, password:string, isAdmin:boolean=false)
{
    if(isAdmin===true)
    {
        if(username==="Admin" && password==="admin")
        {
            return "You are valid admin person.";
        }
        else{
            return "Please try again.";
        }
    }else{
        if(username==="User" && password==="user")
        {
            return "You are valid normal person.";
        }
        else{
            return "Please try again.";
        }
    }

    return "You are not valid user."
}

let authenticateUser= (username:string, password:string, isAdmin:boolean=false)=>{
    //
    //
    //
    //
    //
    //
}
