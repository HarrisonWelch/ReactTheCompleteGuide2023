# The Concept of "Composition" ("children props")

React is all about the Components.

We have components everywhere now
* Expenses
* ExpenseItem
* ExpenseData

Later one we can learn about the interactive-ness
* HTTP
* REST requests
* etc

This is later on.

Components are these HTML components.

This building of UI with smaller components is called composition

What if we want to build a component as a shell around all other components?

All these components are configured just through props.

Sometimes we have a component that is configured through props. Sometimes we want to pass content in the opening and closing tags.

We can extract the styles such as a Component. Call this "Card". This is an industry standard.

Our CSS will look like this
```css
.card {
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

Change ExpenseItem to this:
```js
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js"
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
```

which replaces the surrounding divs.

Having content between open-closing tags does NOT work like that...

Wehave to change Card to this

```
import "./Card.css"

function Card(props) {
    return <div className="card">{props.children}</div>;
}

export default Card;
```

`children` is a reserved name

Content is back, but Styling is still broken.

```js
import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
```

We set the className on the Card such that any child will have it's className within it. It will keep the html className behavior enabled.

Now the website is back to the way it was

Also adjust the Expenses container to add the Card to the root div as well.

Models and Alerts have more complex structure too.

Being able to extract like this makes things manageable and clean.

props.children allowes access to wrappers.

## Current solution Added and Modified files

Card.js
```js
import "./Card.css"

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card;
```

Card.css
```css
.card {
    border-radius: 12px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

ExpenseItem.js
```js
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
```

ExpenseItem.css
```css
.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
}

.expense-item__description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
}

.expense-item h2 {
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
}

.expense-item__price {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
}

@media (min-width: 580px) {
  .expense-item__description {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }

  .expense-item__description h2 {
    font-size: 1.25rem;
  }

  .expense-item__price {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}
```

Expense.js
```js
import ExpenseItem from "./ExpenseItem.js";
import Card from "./Card.js";
import './Expenses.css';

function Expenses(props) {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;
```

Expense.css
```css
.expenses {
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
}
```



