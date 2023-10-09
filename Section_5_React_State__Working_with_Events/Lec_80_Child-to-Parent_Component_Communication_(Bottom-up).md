# Child-to-Parent Component Communication (Bottom-up)

We need to pass data up to App.js where the array is

We can do parent to child with props.

We make an expenseForm custom prop that we name ourselves `onSaveExpenseData` which we can make accept a pointer to a function.

NewExpense.js:

```js
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
```

Then we can call the props object which will have a new function to allow use to update this property on the parent component.

ExpenseForm.js:

```js
const submitHandler = (event) => {
  event.preventDefault(); // Default JS behavior

  const expenseData = {
    title: enteredTitle, // Point at the state variables up above.
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  props.onSaveExpenseData(expenseData); // <--

  setEnteredTitle("");
  setEnteredAmount("");
  setEnteredDate("");
};
```

Then we can respond to this data passed up by writing a handler function in the NewExpense.js file.

NewExpense.js:

```js
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };
  console.log(expenseData);
};
```

Which will allow us to observe the data in the console.

Now we want to elevate this data to the App.js component.

App.js:

```js
const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expense);
};

return (
  <div>
    <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} />
  </div>
);
```

And we then update our handler function in `NewExpense` to use update `onAddExpense` in the props object.

```js
const saveExpenseDataHandler = (enteredExpenseData) => {
  const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString(),
  };
  props.onAddExpense(expenseData);
};
```

Then in the console you can see App.js is logging.

```
In App.js

{title: 'Book', amount: '12.99', date: Tue Oct 03 2023 20:00:00 GMT-0400 (Eastern Daylight Time), id: '0.8164656616958299'}amount: "12.99"date: Tue Oct 03 2023 20:00:00 GMT-0400 (Eastern Daylight Time) {}id: "0.8164656616958299"title: "Book"[[Prototype]]: Object
```
