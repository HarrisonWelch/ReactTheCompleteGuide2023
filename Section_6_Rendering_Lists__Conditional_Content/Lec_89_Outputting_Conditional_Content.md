# Lec 89 Outputting Conditional Content

Filter is now working but we want to show "No data" when nothing can be displayed.

This is when we use conditional output with React

Default ternary syntax

```js
{
  filteredExpenses.length === 0 ? (
    <p>No expenses found</p>
  ) : (
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  );
}
```

You can use `&&` as a trick to return things if the exist.

```js
{
  filteredExpenses.length === 0 && <p>No expenses found</p>;
}
{
  filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
}
```

OR we can move this up in the file. We can build JSX up above. Producing a "lean" JSX snippet.

```js
let expensesContent = <p>No expenses found.</p>;

if (filteredExpenses.length > 0) {
  expensesContent = filteredExpenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}

return (
  <div>
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
    </Card>
  </div>
);
```
