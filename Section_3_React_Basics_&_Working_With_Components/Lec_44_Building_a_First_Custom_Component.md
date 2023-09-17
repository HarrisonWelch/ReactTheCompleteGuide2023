# Building a First Custom Component

Looking at the expense tracker. We have the components
* Items
* Chart Bars
* Drop down
* Date

## Our first component

React will have dozens or hundreds of components.

Create `component` directory inside the `src` directory.

App will stay in its own section b/c it's special

In React we build a component tree

App at the top and then 

We have a header section and tasks sections

Tasks contain many `Task` components

Credit .bitsrc.io:

![React Tree Image](https://miro.medium.com/v2/resize:fit:640/format:webp/1*ish-uXfpU4WqcXPPHfIDlQ.png)

----

Create `ExpenseItem.js` in the components directory.

Convention is captial-lead camelCase.

| **IMPORTANT** |
| - |
| **A component in react is just a function** |

ExpenseItem.js:
```js
function ExpenseItem() {
    return <h2>Expense item!</h2>
}

export default ExpenseItem;
```

Now we don't import this in index.js We import it to the `App.js` folder. Then we can use it in place of the p tag earlier

Rules of Thumb:
* lower-case tags are built-in HTML
* upper-case tags are custom components

App.js:
```js
import ExpenseItem from "../components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
```

We now see our custom component in browser!

![expense_item_first image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/expense_item_first.png)
