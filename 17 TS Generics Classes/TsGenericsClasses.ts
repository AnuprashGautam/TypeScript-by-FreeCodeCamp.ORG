class Box<T>{
    content:T;

    constructor(value:T) {
        this.content=value;
    }

    getContent():T{
        return this.content;
    }
}

const stringBox=new Box<string>("Hello World");
const numberBox=new Box<number>(123);

console.log(stringBox);
console.log(numberBox);

class Pair<A, B>{
    constructor(
        public first:A,
        public second:B
    ) {
    }

    getInfo():string{
        return `${this.first}--${typeof this.first}\n${this.second}--${typeof this.second}`;
    }
}

const userIdName = new Pair<number, string>(1, "Anuprash Gautam");
console.log(userIdName.getInfo());

const productInfo = new Pair<string, boolean>("Lenovo Laptop", true);
console.log(productInfo.getInfo());



class DataStore<T>{
    private store: Array<T>=[];

    addItem(item:T):void
    {
        this.store.push(item);
    }

    getItems():T[]{
        return this.store;
    }
}

const numStore = new DataStore<number>();
numStore.addItem(1);
numStore.addItem(10);
console.log(numStore.getItems());



interface Person{
    name: string;
}


class PersonStore<T extends Person>
{
    private persons:T[]= [];

    addPerson(person:T){
        this.persons.push(person);
    }

    getPersons():T[]
    {
        return this.persons;
    }
}

const personStore= new PersonStore<Person>();
personStore.addPerson({name:"Anuprash"});
personStore.addPerson({name:"Anirudh"});
console.log(personStore.getPersons());

