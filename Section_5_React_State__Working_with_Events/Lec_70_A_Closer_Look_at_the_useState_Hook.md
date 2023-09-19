# A Closer Look at the useState Hook

Now we learned about state. It's a key concep in React.

useState registers some state. it registers it for a specific instances. We have seperate component states by default in this way. Whenever state function is used is within just the component.

Placing a console log in the component code will should the built.

```js
console.log('ExpenseItem built.')
```

Why do we use const? By calling useState we never assign a value.

The useState is function is called again when setTitle fires and re-draws the component.

It will detect he past update. useState is really only called on the first draw/build of a component.

In a nutshell state is simple.

Without state our UI would never change.

Thus user events and state are very important.

ExpenseItem.js
```js
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  console.log('ExpenseItem built.')

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('title = ' + title);
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
