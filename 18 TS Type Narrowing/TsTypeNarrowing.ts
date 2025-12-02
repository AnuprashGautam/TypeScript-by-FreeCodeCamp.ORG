function parseData(data: string | string [] | null)
{
    if(data)
    {
        if(typeof data === "object")
        {
            for(let str of data)
            {
                console.log(str);
            }
        }
        else if (typeof data === "string"){
            console.log(data);
        }
    }
    return "Please provide the value."
}

parseData(["Anuprash", "Anirudh", "Ramu"]);
parseData("Anushka");
console.log(parseData(null));


