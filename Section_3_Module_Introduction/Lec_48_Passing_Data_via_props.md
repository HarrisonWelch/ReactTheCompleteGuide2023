# Passing Data via "props"

Good news is we can already re-use it

We can just update App.js to include two ExpenseItems

```js
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
```

Example:

![easy_reuse image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/easy_reuse.png)

Super easy to reuse a component

Can keep it going to 4,5,6 copies...

Think about splitting function into multiple files.

Just like with functions where we use diff input values in parameters in the function.

We can use similar things in React called Props.

Example:

We have an App that has goalItem variable called "Finished!

CourseGoalItem with a list item of `<li>{goalItem}</li>`

We can't just send data from App to CourseGoalItem

We can setup a parameter on the component

```js
<CourseGoalItem text={goalItem}>
```
which can to
```js
<li>{props.text}</li>
```

This is similar to how HTML has props like `class` and `id`. We are basically building custom HTML.

There is a provided expenses array in the lesson. Change ExpenseItem

```js
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
```

Now to add props/attributes

We can hardcode them again like

```js
<ExpenseItem title="Toilet Paper"></ExpenseItem>
```

But we can also, and better, do it this way.

```js
<ExpenseItem title={expenses[0].title}></ExpenseItem>
```

Then we can flip our returned JSX to this

```jsx
<div>
    <h2>Let's get started!</h2>
    <ExpenseItem
    title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date}
    ></ExpenseItem>
    <ExpenseItem
    title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date}
    ></ExpenseItem>
    <ExpenseItem
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}
    ></ExpenseItem>
    <ExpenseItem
    title={expenses[3].title}
    amount={expenses[3].amount}
    date={expenses[3].date}
    ></ExpenseItem>
</div>
```

We won't notice much of a change:

![not_much_change image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/not_much_change.png)

We need to add to the ExpenseItem to use these.

We don't do this
```js
function ExpenseItem(title, amount, date) {...}
```

React will make it just 1 param. Typical name is props, but you can name it whatever you want.

`props` contains key-value pairs. The key would be the attribute names, title, amount, date. and the value will be the value assigned.

```js
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

You'll use Props all the time. It allows the reusable

![props_now image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/props_now.png)
