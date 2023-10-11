# Lec 88 Understanding Keys

React has a concept when rendering data effeciently.

Adding items make it flash. The last item flashed?

When you add a new item. React updates all items such that it matches all items. To React all the items look similar. It adds a new div and updates all divs. Result is correct but the performance is not great.

We have a way of telling react how to do that.

Add a `key` prop.

React has a index inbuilt for the map function but that is advised against as it can bring bugs where the id is not managed directly.

```js
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id} // Here
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
```
