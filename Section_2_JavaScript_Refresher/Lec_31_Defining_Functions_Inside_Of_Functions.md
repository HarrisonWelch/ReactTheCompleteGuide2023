# Defining Functions Inside Of Functions

May not make much sense in Vanilla JS, but will make sense in React

```js
function init() {
  function greet() {
    console.log("hi!");
  }

  greet();
}

// greet(); // scoped into init, not available here

init();
```

Output
```
hi!
```
