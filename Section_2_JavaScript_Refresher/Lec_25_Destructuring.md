# Lec 25 Destructuring

It's a syntax for breaking down objs into variables.

```js

const firstName = userNameData[0];
const lastName = userNameData[1];

console.log(firstName);
console.log(lastName);

```
Output
```
Max 
Schwarzmüller 
```

## This can be shortened
```js
const [firstName, lastName] = ["Max", "Schwarzmüller"];

console.log(firstName);
console.log(lastName);
```

Output is the same
```
Max 
Schwarzmüller 
```

## Use with JSON

```js
const user = {
  name: "Max",
  age: 34
};
```

Can be shortened to

```js
const {name, age} = {
  name: "Max",
  age: 34
};
```

NOTE: the name has the be the **same**. You cannot name it like in the firstName/lastName example

But you can alias them!

```js
const { name: userName, age: userAge } = {
  name: "Max",
  age: 34
};

console.log(userName);
console.log(userAge);
```

CodeSandbox:

![destruct_alias image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/destruct_alias.png)
