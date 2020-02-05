# 2.1.3 - JavaScript Expressions vs Statements

---

## Expressions

---

- Expressions are anything that produces (returns) a value.
- Every value that is written literally.
- It can be written wherever a value is expected.
- Expressions can contain other expressions.

```js
// Example
1. 22
2. "bacon"
3. "foo" !== "bar" ? "Great!!" : "Nooooo!" // This expression evaluates to "Great!!"

```

_Expressions are the language equivalent to phrases._

---

## Statements

---

- The simplest statement is an expression with a `;` after it.
- A statement expresses an action to be carried out.

---

## Expressions vs Statements

- An expression can be content to just produce a value, which can then be used by the enclosing code.
- A statement stands on its own, so it amounts to something only if it _affects the world._ 
    - It could display something on the screen—that counts as changing the world.
    - it could change the internal state of the machine in a way that will affect the statements that come after it.

---

```js
// Example
let allegiance = '';
if (forceUseGood === true) { /// this is the expression the " forceUsGOod === true)
    allegiance = 'jedi'
} else {
    allegiance = 'dark side'
}
```

---