# Using Functions as Values

* Essential Features Used By React
* Tricky Parts

Functions can be passed as values

Example is `setTimeout`

Pass the function without parenthesis to send it the function to be exe as it sees fit.

```js
function handleTimeout() {
  console.log("Timed Out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again");
}; // make them non-anonymous by storing it.

// setTimeout(() => {}); // or use anon func

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out...");
}, 4000);
```

Output

```
Timed Out! 
Timed out ... again 
More timing out... 
```

## Define our own func-param functions (custom)

```js
function greeter(greetFn) {
  // greetFn expects a function
  greetFn();
}

greeter(() => console.log("Hi!"));
```

Output
```
Hi! 
```

We called out param as a function (b/c it is!)

It's not limited to built-in functions like setTimeout
