# Splitting Components Into Multiple Components

* As you work on your React app and React Components.
* Your components become bigger and bigger. 
* This is something that will naturally happen. 
* That is why React has this component focus. 
* Such that every component/building-block is focus on one core task. 
* You keep every component small but this build very complex apps all together.

Let's split this expense component. A new component for building this date

Make ExpenseDate.js

Moving some of the JS and JSX out of ExpenseItem into ExpenseDate

In the App component we use ExpenseItem component and inside that is the ExpenseDate component.

This data is made in App which is forwarded from App to ExpItem to ExpDate.

All of this could have been in the expenseItem but it is better to keep components small and focused.

ExpenseDate.js Component:

```js
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
```

Then you have this CSS file.

```css
.expense-date {
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
}

.expense-date__month {
  font-size: 0.75rem;
  font-weight: bold;
}

.expense-date__year {
  font-size: 0.75rem;
}

.expense-date__day {
  font-size: 1.5rem;
  font-weight: bold;
}
```

And similarly we modify our ExpenseItem.js to use this new component

```js
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

Note that we are passing through this date object into `<ExpenseDate date={props.date} />`.

The overall effect is the same on the result but now with new styling.

![expense_date_output image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/expense_date_output.png)
