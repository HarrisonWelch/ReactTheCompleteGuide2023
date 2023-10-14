# Lec 94 Fixing a Small Bug

We are sending amount as a string and not as an number. Do this to force number conversion.

Change

```js
const expenseData = {
  title: enteredTitle, // Point at the state variables up above.
  amount: enteredAmount,
  date: new Date(enteredDate),
};
```

To

```js
const expenseData = {
  title: enteredTitle, // Point at the state variables up above.
  amount: +enteredAmount,
  date: new Date(enteredDate),
};
```
