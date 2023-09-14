# Revisiting Functions & Parameters

Another crucial JS concepts

Either
* `function` keyword
* `() => ` keyword

Going to define some code that is not exe immediately, but at some point in the future and as many times as needed

```js
function greet() {
  // function code
  console.log("Hello!");
}
```

Function is defined but never executed b/c never called.

Call it
```js
greet();
```

Add as many as you want

```js
greet();
greet();
greet();
greet();
greet();
```

which calls it 5 times in the console

## Parameters

```js
function greet(userName, message) {
  // function code
  console.log(userName);
  console.log(message);
}
```

function is also using camelCase.

Can call with diff values

```js
function greetUser(userName, message) {
  // function code
  console.log(userName);
  console.log(message);
}

greetUser("Max", "Hello!");
greetUser("Manual", "Hello, what's up?");
```

Output
```
Max 
Hello! 
Manual 
Hello, what's up?  
```

## Default args

```js
function greetUser(userName, message = "Hello!") {
  // function code
  console.log(userName);
  console.log(message);
}

greetUser("Max");
greetUser("Manual", "Hello, what's up?");

```

Output is the same
```
Max 
Hello! 
Manual 
Hello, what's up? 
```

## Return values

`return` keyword

```js
function greetUser(userName, message = "Hello!") {
  // function code
  // console.log(userName);
  // console.log(message);
  return "Hi, I am " + userName + "." + message;
}

greetUser("Max");
greetUser("Manual", "Hello, what's up?");
```
No output

Parameters and return values can work together

Functions should describe what it does

Might want to rename it to `createGreeting`

```js
function createGreeting(userName, message = "Hello!") {
  // function code
  // console.log(userName);
  // console.log(message);
  return "Hi, I am " + userName + "." + message;
}

const greeting1 = createGreeting("Max");
// or log it

console.log(greeting1);

const greeting2 = createGreeting("Manual", "Hello, what's up?");

console.log(greeting2);
```

Output
```
Hi, I am Max.Hello! 
Hi, I am Manual.Hello, what's up? 
```
