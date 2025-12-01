function iReturnsNumber():number{
    return 10;
}

const iReturnsString= ():string=>{
    return "Hello";
}

function iReturnVoid():void{
}

function iNeverReturnExp():never{
    throw new DOMException();
}

function iNeverReturnInfinity():never{
    while(true)
    {
        console.log("Infinite loop.")
    }
}





