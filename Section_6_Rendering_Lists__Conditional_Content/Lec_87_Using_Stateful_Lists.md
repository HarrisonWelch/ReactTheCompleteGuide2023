# Lec 87 Using Stateful Lists

Update the expenses array in react by using state.

1. Import useState
2. Move the current expenses array outside the main function for some starting data on the state
3. Use array destructuring and the useState method to setup the expenses data bind, setExpenses updating function, and the DUMMY_EXPENSES array
4. Change the add expense handler to set expenses to the new expense plus the prev expenses using the spread-op plus the handy prevState function pattern.

App.js:

```js
import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const DUMMY_EXPENSES = [
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; // Cleaner way of depending on prev state
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
```

Now adding expenses works!

![87_add_expense image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/87_add_expense.png)
