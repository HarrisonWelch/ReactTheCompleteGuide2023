# Alternative Creating A Shared Handler Function

Take a look at the handler functions.

We can just have 1 monolithic change handler

```js
const inputChangeHandler = (identifier, value) => {
  if (identifier === "title") {
    setEnteredTitle(value);
  } else if (identifier === "date") {
    setEnteredDate(value);
  } else {
    setEnteredAmount(value);
  }
};
```

Which then we have full control of how this is called down in the JSX.

```js
<input type="text" onChange={(event) => inputChangeHandler('title', event.target.value)} />
```

This is one option but won't be used in the lesson going forward.
