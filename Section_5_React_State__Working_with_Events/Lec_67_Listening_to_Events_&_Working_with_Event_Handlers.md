# Listening to Events & Working with Event Handlers

We have this output on the screen from section 3

Let's React to user events

Start simple with clicks on a button

Add button to the ExpenseItem.js. Style is not great but temp button.

```js
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

```

I want to react by changing title when the button is clicked.

This is rather simple in React. We have full access to the Native DOM listeners.

Click to Element

Events
* Click
* Blur

instead of adding listenter

```js
document.getElementById('root').addEventListener();
```

^ imperative non-Reacy Way.

React exposes events as on*.

`onClick` expects a JS function

```js
button onClick={() => {console.log("CLICKED!")}}>Change Title</button>
```

![clicked image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/clicked.png)

Keep the JSX lean.

Can Also create function outside of JSX

```js
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("CLICKED!!!")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
```

Code is eval when click occurs

React can add a listener if the native element has it. Start with on... and the next letter must be capital.

Event functions should end in Handler like `clickHandler`.

This is instructor preference/norm
