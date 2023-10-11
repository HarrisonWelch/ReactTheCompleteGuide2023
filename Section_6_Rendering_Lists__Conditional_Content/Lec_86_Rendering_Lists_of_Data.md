# Lec 86 Rendering Lists of Data

So here is out project. We have a static list, not dynamic. Filter does not work. Adding an item does not actually add anything. That is what we are going to do.

We are individually adding elements

JS array map. Transforms every element in the array.

We can render our list by using curly braces, map function, and JSX rendering like so:

```js
{
  props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ));
}
```

Which renders just as the hard coded array elements did before.

![86_render image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/86_render.png)
