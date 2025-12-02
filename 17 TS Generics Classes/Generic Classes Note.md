# ⭐ **Generics in TypeScript (with Classes)**

### **Definition (Simple words)**

Generics allow you to **create a class that works with different data types** *without losing type safety*.
You make the class *flexible* and *reusable*.

---

# 🔧 **Simple Analogy**

Think of a **lunchbox** 🍱.

* A lunchbox can store *any* food: rice, pasta, fruits.
* But **once you put pasta in it, it becomes a "pasta lunchbox"**.
* Now it should only allow pasta — not biryani by mistake.

Generics work the same way.

---

# 🧱 **Generic Class Syntax**

```ts
class ClassName<T> {
    // use T as a placeholder type
}
```

Here:

* `<T>` is a **type variable**
* T will be replaced by actual type when creating an object

---

# ✅ **Example 1: Generic Storage Class**

### Without generics ❌

```ts
class Box {
    content: any;
}
```

`any` removes type safety — not good.

---

### With generics ✔️

```ts
class Box<T> {
    content: T;

    constructor(value: T) {
        this.content = value;
    }

    getContent(): T {
        return this.content;
    }
}
```

### Using the class

```ts
const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");
```

Now TypeScript protects the types:

```ts
numberBox.content = 200;     // ✅ OK
numberBox.content = "abc";   // ❌ ERROR
```

---

# 🚗 **Example 2: Generic Class for Pair (holding 2 values)**

```ts
class Pair<A, B> {
    constructor(
        public first: A,
        public second: B
    ){}
}

const userIdName = new Pair<number, string>(1, "Anuprash");
const productInfo = new Pair<string, boolean>("Laptop", true);
```

So `<A, B>` allows two different generic types.

---

# 📦 **Example 3: Generic Class with Methods**

```ts
class DataStore<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

const stringStore = new DataStore<string>();
stringStore.addItem("Apple");
stringStore.addItem("Orange");

const numStore = new DataStore<number>();
numStore.addItem(20);
numStore.addItem(50);
```

TypeScript prevents:

```ts
stringStore.addItem(100); // ❌ Error
```

---

# 🛡️ **Example 4: Generic Class With Constraints**

Sometimes T should follow a specific structure.

```ts
interface Person {
    name: string;
}

class PersonStore<T extends Person> {
    private persons: T[] = [];

    add(p: T) {
        this.persons.push(p);
    }
}

const ps = new PersonStore<Person>();

ps.add({ name: "Anuprash" });       // OK
ps.add({ });                        // ❌ Must have name
```

---

# 🧠 **Why Use Generics in Classes?**

| Advantage              | Meaning                           |
| ---------------------- | --------------------------------- |
| 🔹 Reusability         | Same class works for many types   |
| 🔹 Type safety         | No accidental wrong types         |
| 🔹 Better Intellisense | VS Code shows correct suggestions |
| 🔹 Cleaner code        | No repeated classes for each type |

---

# 🌟 Final Summary

Generics in classes = **building a flexible class that accepts a type later**.

```ts
class Box<T> { ... }

const numberBox = new Box<number>(10);
const stringBox = new Box<string>("TS");
```

This lets you reuse the same class for:

* numbers
* strings
* objects
* custom types

…while still maintaining **strict type checking**.