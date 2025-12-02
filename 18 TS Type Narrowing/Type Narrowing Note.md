# ⭐ **What is Type Narrowing in TypeScript?**

### **Short Definition**

**Type Narrowing means reducing a broad type into a more specific type using conditions.**

When TypeScript doesn’t know the exact type of a variable, it tries to **figure it out** using checks like:

* `typeof`
* `instanceof`
* `"in"` operator
* Equality checks
* Custom type predicates
* Control-flow analysis

---

# 🎯 **Simple Analogy**

Think of narrowing like checking what’s inside a **mystery box** 🎁.

* At first, you only know: *It may contain a toy OR a book*.
* After opening a small part, you see pages → Now you know it's a book.

You **narrowed** the type from `"toy | book"` → `"book"`.

---

# 🧩 Why Do We Need Type Narrowing?

Because union types like:

```ts
let value: string | number;
```

are too broad.
To use `value.toUpperCase()` safely, TypeScript must confirm `value` is a string.

---

# 🔥 **Example 1: typeof narrowing**

```ts
function printValue(x: string | number) {
    if (typeof x === "string") {
        console.log(x.toUpperCase()); // x is string here
    } else {
        console.log(x.toFixed(2)); // x is number here
    }
}
```

### What Happens?

* Inside `if (typeof x === "string")`,
  TypeScript **knows x is a string**.
* Inside `else`,
  TypeScript **knows x is a number**.

---

# 🔥 **Example 2: Truthiness Narrowing**

```ts
function showMessage(msg?: string) {
    if (msg) {
        console.log(msg.toUpperCase());  // msg is string
    } else {
        console.log("No message");
    }
}
```

When `msg` is truthy → narrowed to **string**.
When falsy → narrowed to **undefined**.

---

# 🔥 **Example 3: Equality Narrowing**

```ts
function compare(a: string | number, b: string | number) {
    if (a === b) {
        // TypeScript knows both are same type
        console.log(a, b);
    }
}
```

TS narrows both `a` and `b` to **string** OR **number**, but same type.

---

# 🔥 **Example 4: Property check (in operator)**

```ts
type User = { name: string };
type Admin = { name: string; isAdmin: boolean };

function checkPerson(p: User | Admin) {
    if ("isAdmin" in p) {
        console.log("Admin:", p.isAdmin); // Admin type
    } else {
        console.log("User:", p.name);     // User type
    }
}
```

Using `"in"` lets TS narrow the type.

---

# 🔥 **Example 5: instanceof Narrowing**

Useful for classes:

```ts
class Dog {
    bark() { console.log("Woof"); }
}
class Cat {
    meow() { console.log("Meow"); }
}

function speak(pet: Dog | Cat) {
    if (pet instanceof Dog) {
        pet.bark();     // Dog
    } else {
        pet.meow();     // Cat
    }
}
```

---

# 🔥 **Example 6: Discriminated Union Narrowing**

Very common in Angular / React models.

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function area(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side * shape.side;
    }
}
```

`shape.kind` narrows the union.

---

# 🔥 **Example 7: Type Predicate Narrowing (Advanced)**

You can guide TS manually.

```ts
function isString(x: any): x is string {
    return typeof x === "string";
}

function demo(value: string | number) {
    if (isString(value)) {
        console.log(value.toUpperCase()); // string
    }
}
```

`x is string` tells TS:
👉 "If this function returns true, the type is string".

---

# 📝 **Final Summary Table**

| Technique               | Example                | Narrows To                   |
| ----------------------- | ---------------------- | ---------------------------- |
| **typeof**              | `"string"`, `"number"` | Primitive types              |
| **truthiness**          | `if (value)`           | Removes `null` / `undefined` |
| **equality**            | `a === b`              | Same type of both            |
| **in operator**         | `"prop" in obj`        | Based on object properties   |
| **instanceof**          | `obj instanceof Class` | Class instance               |
| **discriminated union** | `obj.kind === "type"`  | Specific type in union       |
| **type predicates**     | `x is Type`            | Custom narrowing             |

