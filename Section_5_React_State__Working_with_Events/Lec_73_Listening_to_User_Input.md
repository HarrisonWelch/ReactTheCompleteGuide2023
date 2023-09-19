# Listening to User Input

Lets now work on gathering user input. I want to get the value on every keystroke. The "store" it by making dummy console logs.

Could use `onInput` but `onChange` is better because we don't need every input and it works with multiple input types.

Remember we just point to the function and don't use `()` so this:

```js
<input type="text" onChange={titleChangeHandler}/>
```

How do we get the value?

Vanilla JS

```js
document.getElementById('').addEventListener('click', (event) ={})
```

React has it built in like so

```js
const titleChangeHandler = (event) => {...}
```

where event is passed through.

Log this to the console

```js
const titleChangeHandler = (event) => {
console.log("Title changed!");
console.log(event);
};
```

What is interesting is the 'target' of the event object. Which then has a 'value'. This gives you the target value. Its the first element listed under target.

ExpenseForm.js:
```js
import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = (event) => {
    console.log("Title changed!");
    console.log(event.target.value);
    console.log(event);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2023-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
```
