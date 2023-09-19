# How Component Functions Are Executed

Reacting to events is a good first step

We want to change the title when the button is pressed. We can do it with a variable like this:

```js
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  let title = props.title;

  const clickHandler = () => {
    title = 'Updated';
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
```

Title never changes.

Console log and it appears to work but nothing is chaning

Why don't we see the update?
-> React doesn't work like this

Under the hood this JSX is almost like a function call. The curly braces are evaluated but then stops trying to eval. "Until no more component code to call".

App.js calls and then that calls the children and so on and so forth. React never repeats that. thereafter... its done... Oh dear.

React introduces a special concept called "STATE".
