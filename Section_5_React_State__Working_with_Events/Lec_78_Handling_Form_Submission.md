# Handling Form Submission

We don't want the page to reload. Can be disabled.

The form tag has an `onSubmit` function which would allow use to respond to the data.

```js
<form onSubmit={submitHandler}>...</form>
```

And our `submitHandler` function would look like this

```js
const submitHandler = (event) => {
  event.preventDefault(); // Default JS behavior

  const expenseData = {
    title: enteredTitle, // Point at the state variables up above.
    amount: enteredAmount,
    date: new Date(enteredDate),
  };

  console.log(expenseData);
};
```

![78_log_form image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/78_log_form.png)

We are now reacting to the form submission!

Now we want to clear the inputs.
