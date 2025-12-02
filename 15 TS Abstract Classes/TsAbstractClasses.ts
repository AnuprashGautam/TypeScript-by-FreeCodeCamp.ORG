abstract class Time{
    past():string{
        return "I have seen past.";
    }

    present():string{
        return "I am seeing present.";
    }

    abstract future():string;
}

class Clock extends Time{
    future():string{
        return "I am future. Whom none can see.";
    }
}

const time:Time=new Clock();
console.log(time.future());