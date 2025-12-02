# ✅ **What the Code Is Doing (Short Explanation)**

You created **3 interfaces** (`circle`, `square`, `rectangle`) and combined them into a **union type**:

```ts
type Shape = circle | square | rectangle;
```

The function:

```ts
const getArea = (shape: Shape) => { ... }
```

uses a `switch` to calculate area based on the **kind** of shape.

---

# 🎯 **The Real Question: What is the default case doing?**

```ts
default:
    const _defaultShapeValue: never = shape;
    return _defaultShapeValue;
```

---

# ⭐ **Understanding the `default` Case (Very Important in TypeScript)**

### 💡 Purpose:

The **default case is NOT meant to run** in normal execution.

It is used **only for type safety**, to ensure that the developer handles *every possible type* in the `switch` statement.

---

# 🧠 **Why do we assign `shape` to a variable of type `never`?**

Because `never` means:

> ❌ This value should NOT exist.
> ❌ This case should NEVER happen.

### Think of it this way:

You told TypeScript:

> “I have exactly 3 kinds of shapes.
> I handled circle, square, and rectangle.
> So nothing else should come here.
> If something does → throw a compile-time error."

---

# 🔍 **What happens internally?**

If in the future you add a new shape, like:

```ts
interface triangle {
    kind: "triangle";
    base: number;
    height: number;
}
```

Then update the union:

```ts
type Shape = circle | square | rectangle | triangle;
```

Now TypeScript will check your `switch`:

* You handled `"circle"`
* `"square"`
* `"rectangle"`
* ❌ You did NOT handle `"triangle"`

Now this line:

```ts
const _defaultShapeValue: never = shape;
```

will give a **TypeScript error**:

```
Type 'triangle' is not assignable to type 'never'
```

This error tells you:

> “You forgot to handle 'triangle' in the switch!”

So the default case acts like a **guard** that warns developers if a new type is not covered.

---

# 🛠 Why Use Never Here?

### ✔ Ensures **exhaustiveness checking**

TypeScript checks whether all members of the union are handled.

### ✔ Prevents **runtime bugs**

If a new shape is added and you forget to update the logic, TS forces you to fix it.

### ✔ Better safety in complex systems

Especially important in enterprise applications or switch-heavy logic (Angular, Backends, etc.).

---

# 🧪 Does the default case ever run at runtime?

**No.**
If your union type is correct, the default block will **never execute**.

### Example:

```ts
getArea({ kind: "circle", pi: 3.14, radius: 10 });
```

Directly matches `"circle"` → default is skipped.

---

# 📌 Final Summary (Very Clear)

| Part                                | Meaning                                                |
| ----------------------------------- | ------------------------------------------------------ |
| `default` block                     | Should never run; used only for compile-time checking  |
| `_defaultShapeValue: never = shape` | If TypeScript reaches here, it means you missed a case |
| Helps catch bugs early              | TypeScript warns if union grows but switch doesn’t     |

So the purpose of the default case is **not execution**, but **type safety**.