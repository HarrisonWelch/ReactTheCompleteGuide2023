# Alternative Ways of Passing & Receiving / Handling "props"

Where we have a component that uses all data. We can then setup multiple key value pairs. But an alternative is to instead create an expense item that could be titled expense and pass that all in as one single prop.

Example:
```js
<ExpenseItem
    expense={expenses[0]}
></ExpenseItem>
```

But that would mean you will need to update the ExpenseItem

```js
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.expense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}
```

Another approach is to use object destructuring right here in the function parameters

```js

function ExpenseItem({data, title, amount}) {...}
```

And then the `props` with dot-operator access is not needed. Like so:

```js
import "./ExpenseItem.css";

function ExpenseItem({date, title, amount}) {
  return (
    <div className="expense-item">
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

Both are alternatives but going with the old approach before this video for beginner read-ability and with standards of using props.
