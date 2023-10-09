# Adding Two-Way Binding

We want to set the title to an empty string after submission.

We add two way binding to the input by using the "value" property and set that to the bound variable `enteredTitle` for example

```js
<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
```

Then our `submitHandler` function can simply call functions to set this value to an empty string.

```js
const submitHandler = (event) => {
  event.preventDefault(); // Default JS behavior

  const expenseData = {
    title: enteredTitle, // Point at the state variables up above.
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  console.log(expenseData);

  setEnteredTitle("");
  setEnteredAmount("");
  setEnteredDate("");
};
```
