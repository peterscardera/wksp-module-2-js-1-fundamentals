# 2.1.2 - JavaScript Types and Operators

---

There are 6 basic types in JavaScript.

- Strings
- Booleans
- Empty values
- Numbers
- Arrays
- Objects

```js
// Examples

```

If you are not sure of the type of a given value, you can use `typeof <VALUE>`

---

## Strings

Strings represent text. They are written/defined by wrapping the text in quotes.

- Double quotes: "Your path you must decide."
- Single quotes: 'Luminous beings are we…not this crude matter.'
- Backticks: \`Do. Or do not. There is no try.\`

They are equally good... sort of.

---

### Backticks \`\`

- Strings wrapped in backticks have a super power called, interpolation.
- Interpolation is a way of inserting JavaScript into your strings.
- To interpolate a string you use this syntax ${}

---

#### Interpolation Example 

```js
let pi = 3.14;
let diameter = 14;
let radius = diameter / 2;

// declare a string
let introduction = `The area of a circle is π^2.`

// declare a string with interpolation
let example = `So a ${diameter} pizza has an area of ${pi * radius * radius}.`

// Concatenate the strings
let text = intro + ' ' + example

console.log(text);
// The area of a circle is π^2. So a 14 pizza has an area of 153.86.

```

---

## Booleans

It is useful to have a value that distinguishes between only two possibilities, e.g. "yes" and "no" or "on" and "off".

Enter Booleans!

They have just two values, `true` and `false`, which are written as those words.

---

## Empty values

There are two special values, written `null` and `undefined`, that are used to denote the absence of a meaningful value.

They are themselves values, but they carry no information.

> The difference in meaning between `undefined` and `null` is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable. (Marijn Haverbeke, [Eloquent JavaScript](https://eloquentjavascript.net/01_values.html))

---

## Numbers

Numbers are exactly what you would expect them to be: numeric values.

- They are numeric values.
    - `19`
- They can be fractional.
    - `12.75`
    - `2.998e8`
- Calculations with integers will always be precise, but this is not quite true for fractional numbers.

---

## Arithmetic

- Basic operators: +, -, *, /
- Order of operations is applied... but when in doubt, add parentheses.
- %: The remainder operator, often called "modulo". This operator returns the remainder of a division.
- Comparison Operators
- Logical operators


```js
// Examples...

```

---

### Comparison operators

| Operator | Description | Example |
|---|---|---|
| `>` | greater than | `2 > 1` |
| `<` | less than | `1 < 2` |
| `>=` | greater than or equal to | `2 >= 1` |
| `<=` | less than or equal to | `1 <= 2` |
| `==` | equal to (loose) | `2 == 2` |
| `!=` | not equal to (loose) | `2 != 1` |
| `===` | equal to (strict) | `2 === 2` |
| `!==` | not equal to (strict) | `2 !== 1` |


All of the examples in the table above evaluate to _true_. So `2 > 1` (2 is greater than 1) is `true`, and `2 < 1` (2 is less than 1) is `false`.

---

### Logical operators

Booleans can be combined to produce new boolean values.

| Operator | Description | Example |
|---|---|---|
| && | AND | _true && true_ |
| &#124;&#124; | OR | _true &#124;&#124; false_ |
| ! | NOT | _!false_ |

All of the examples in the table above evaluate to `true`.

---

Boolean logic is its own thing, but here's a short intro:

- _AND_ means if both the left and right sides are `true`, the expression is `true` otherwise the expression is `false`.
- _OR_ means that if either or both the left and right sides are `true` the expression is `true`. If neither is `true`, the expression is `false`.
- _NOT_ negates the value so that `true` becomes `false`, and `false` becomes `true`.

Of course comparison operators and logical operators are usually combined in an expression to create a boolean value, like this `2 > 1 && -1 < 0` (2 is greater than 1 and -1 is less than 0), which is `true`.

---

## Exercise

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false // True (as soon its see true an OR will be true)
2. false && false  //False
3. 1 < 2 && 2 > 1 //true
4. 31 < 13 || 1 < 2 && 3 > 1 //true
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31) // true
6. true && false && false || false && true // false 
7. true && false || true || false //true
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1 //true
```

---

## Exceptions, special cases and just plain annoying side-effects

- `Infinity` and `- Infinity`
- `NaN` stands for "Not a number" even though it is itself a value of type "number" 🤦‍♂️
- `NaN` is not equivalent to anything – including another `NaN`!
- Automatic type conversion 😲
    - `8 * null`
    - `"5" - 1`
    - `"5" + 1`
    - TODO: add a few more weirdnesses

```js
// Examples

```

---

## Truthy and Falsy

As well as a type, each value also has an inherent boolean value, generally known as either _truthy_ or _falsy_.

The following values are ALWAYS _falsy_:

- `false`
- `0` (zero)
- '' or "" (empty string)
- `null`
- `undefined`
- `NaN` //never equal to something

EVERYTHING else is _truthy_. Everything else.

- '0' (a string)
- 'false' (the word false as a string)
- `[]` (an empty array) _more on arrays in a bit_
- `{}` (an empty object) _more on objects in a bit_
- `function() {}` (an empty function) _more on functions in a bit_


For more details, you can check out this [Sitepoint page](https://www.sitepoint.com/javascript-truthy-falsy/)
    
---


## Arrays

- An array contains multiple values, of pretty much any type.
- Arrays are sequences of anything. Strings, numbers, booleans, arrays, other things we haven't learned about yet.
- You can declare an array by using [ ] square brackets.
- We separate the elements of an array with a comma.
- Arrays are mutable.

```js
['bacon', undefined, 900, true]

```

---

### Accessing the values in an array

We reference the element of an array by its position (index) in the array.

⚠️⚠️ Indexing starts at 0 ⚠️⚠️

```js
// Example 1 - Given this array
let anArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

1. anArrayOfNumbers[0]
2. anArrayOfNumbers[5]
3. anArrayOfNumbers[9]
4. anArrayOfNumbers[10] //undefined
```

---

⚠️⚠️ Indexing starts at 0 ⚠️⚠️

```js
// Example 2 - Given this array
let anArrayOfNumbers = ['bacon', undefined, 900, true]

1. How do we access the value 900? //anArrayOfNumber[2]
2. How do we access the value `true`?

```

---

Arrays can be nested in arrays. Arrays can contain arrays that contain arrays that contain arrays that... _you get the idea_

⚠️⚠️ Indexing starts at 0 ⚠️⚠️

```js
// Example 3 - Given this array
let table = [
  [1,2,3,4,5,6],
  [7,8,9,10,11,12],
  [13,14,15,16,17,18],
  [19,20,21,22,23,24],
  [25,26,27,28,29,30],
  [31,32,33,34,35,36]
]

1. table[0][0] //1
2. table[5][5] //35
3. table[2][3] //16
4. How would we access the value 27?  // [4][2]
```

---

## Exercise

Given this data structure: 

```js
let data = [0, [], [], [1,2,3, [4]]]
```

1. How would you access the value `0`? // data 0 
2. How would you access the value `3`? // data 3 2
3. How would you access the value `4`? // data 3 3 0

---

## Objects

Very broadly, an object can be defined as an unordered collection of key/value pairs. 

`{'givenName': 'Yoda', 'surname': undefined, 'age': 900}`

This object has 3 properties.

```js
// Example
"it has a property with name 'givenName' and value of 'Yoda' of type string"

```

---

# Exercise

Group the following items together according to their type:

`5`, `true`, `null`, `{name: 'bob', age: 23}`, `NaN`, `23`,

`'hello'`, `0`, `['mouse', 'cat', 'dog']`, `'cat'`, `false`,

`null`, `7`, `'42'`, `{product: 'cake', price: '50$'}`,

`undefined`,` ['coconut', 24, 'banana']`, `-99`

```js
// Type 1: elem1, elem2, ...
// Type 2: elem3, elem4, ...
// ...

```

---

### Exercise

- List the number of properties for each object.
- For each property, indicate its name and its value.
- For each property value, indicate the type.

```js
{ label: 'corn', price: 5.3 + '$' };
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' };
//labe is a key
//labe: "corn" is the property
```

---

### Accessing values in objects

Values in objects can be accessed with

- dot notation
- bracket notation

```js
// Example
let person = {name: 'Bob', age: 23};
const otherPerson = {name: 'Joe', age: 31, height: '170cm'};
// objects are not ordered! 

```

---

### Exercise 1

```js
// Given
let person = {name: 'Bob', age: 23};
let name = 'John';

// What is the value of the following expressions?
1. person.name //bob
2. person['name'] //bob
3. person[name] //ERROR 

```

---


### Exercise 2

```js
// Given
let person = {name: 'bob', age: 23};
let key = 'name';

// What is the value of the following expressions:
1. person.key // undefined ****
2. person['key'] //undefine
3. person[key] // bob

```

---

- Every data type that we have worked with (numbers, booleans, strings, arrays, functions) is an object.
- An object is the combination of data and logic.
- Objects have something called methods.

---