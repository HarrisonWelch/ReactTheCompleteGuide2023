# Working with State

State is not React specific. But it is a key concept.

The click should result in data changes

By default regular variables are not going to trigger. React doesn't care.

We need to import `useState` in the first line.

```js
import React, { useState } from "react";
```

Then inside the comp function call `useState();`

This is a React "Hook"

Must be called directly in the component function not in nested function.

We pass `props.title` into `useState(...)` as `useState(props.title);`

Assigning new values.

useState returns an array. The value and the updating function.

We can use destructuring like so

```js
const [title, setTitle] = useState(props.title);
```

Then in the onClick func we call setTitle. The reason for this is managed by React. This won't just receive a value, but the component will be executed _again_.

Then it will draw components onto the screen.

Note that setTitle is schedule. So we see the old title on the first button press.

Now the component stuff works.

ExpenseItem.js:

```js
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

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

Looks like this:

![react_state_first image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/react_state_first.png)
