# Reference vs Primitive Values

Strings

```js
let userMessage = "Hello!"; // Cannot edit them

// userMessage = "Hello Message"; // Old string is thrown away and reassigned

userMessage = userMessage.concat("message"); // Still produces a new string
```

Changes with Objects

```js
const hobbies = ["Sports", "Cooking"];
hobbies.push("Working"); // Editted the original array. Mutated. 
console.log(hobbies);
```

Objects are reference variables. They know their memory addres.

Primitive values, the string itself is stored in the variable. Think of it like that, but technically not correct.

Notice the `const` is still there? That means the address was not changed!
