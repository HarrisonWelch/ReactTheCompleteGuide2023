# Derived Computed State

One option

```js
  const [filteredInfoText, setFilteredInfoText] =
    useState("2019, 2020, & 2022");
  const filterChangeHandler = (selectedYear) => {
    // console.log("Expenses.js");
    setFilteredYear(selectedYear);

    if (selectedYear === "2019") {
      setFilteredInfoText("2020, 2021, & 2021");
    } else if (selectedYear === "2020") {
      setFilteredInfoText("2019, 2021, & 2022");
    } else if (selectedYear === "2021") {
      setFilteredInfoText("2019, 2020, & 2022");
    } else {
      setFilteredInfoText("2019, 2020, & 2021");
    }
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <p> Data for years {filteredInfoText} is hidden.</p>
...
```

The year we exclude

Dynamically compute the infoText based on the `filteredYear` variable.

```js
const [filteredYear, setFilteredYear] = useState("2020");

let filteredInfoText = "2019, 2021, & 2022";

if (filteredYear === "2019") {
  filteredInfoText = "2020, 2021, & 2021";
} else if (filteredYear === "2020") {
  filteredInfoText = "2019, 2021, & 2022";
} else if (filteredYear === "2021") {
  filteredInfoText = "2019, 2020, & 2022";
} else {
  filteredInfoText = "2019, 2020, & 2021";
}

const filterChangeHandler = (selectedYear) => {
  // console.log("Expenses.js");
  setFilteredYear(selectedYear);
};
```

Knowing derived values is important.
