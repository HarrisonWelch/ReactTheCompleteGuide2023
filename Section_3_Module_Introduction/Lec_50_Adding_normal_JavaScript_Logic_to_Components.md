# Adding "normal" JavaScript Logic to Components

Can hard code in the data in the prop.

Let's work on the data. It's not super pretty

We want more of a calendar look.

Date.prototype.toLocaleString() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

Move logic to helper variable for leaness.

Result in ExpenseItem.js:

```js
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

![dynamic_dates image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/dynamic_dates.png)
