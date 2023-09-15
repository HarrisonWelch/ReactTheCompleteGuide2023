# Revisiting Control Structures

Disabled preview to make the refresh `prompt` less annoying.

## If statements

```js
if (10 === 10) {
  // ...
  // only 1 to start
} else if (5 === 5) {
  // ...
  // unlimited number of else-if chains
} else {
  // ...
  // only 1 that ends
}

```

## Password example

```js
const password = prompt("Your password:");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted.");
}

```

Output depends on response to prompt as expected.

## For loop

```js
const hobbies = ["Sports", "Cooking"];

for (const hobby of hobbies) {
  console.log(hobby);
}
```

Output

```
Sports 
Cooking 
```