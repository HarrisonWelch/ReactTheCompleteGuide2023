# Writing More Complex JSX Code

We have written our first component, lets write something more complex.

Let's change this to write the date.

```js
function ExpenseItem() {
    return <div>Date</div><div><h2>Title</h2></div><div>Amount</div>;
}

export default ExpenseItem;

```

This code is unreadable and invalid.

You must only have 1 root element per return statement.

In the above code we have 2 div-s side by side. That is simply not allowed. As to Why, talk about it later on a deep-dive later.

One solution is to wrap this by a div

```js
function ExpenseItem() {
    return <div><div>Date</div><div><h2>Title</h2><div>Amount</div></div></div>;
}
```

For readability, wrap with parenthesis like so

```js
function ExpenseItem() {
    return (<div><div>Date</div><div><h2>Title</h2><div>Amount</div></div></div>);
}

export default ExpenseItem;
```

Then we should restructure it.

We could do it manually but VS code has a shortcut for "Format Document" in preferences -> Keyboard Shortcuts, then search "Format Document".

For me I have this as `Shift+Alt+F`. This is all on a Windows 11 OS.

If the formatter question comes up. Choose the "Prettier" pacakage option downloaded in Section 1.

Now we have this
```js
function ExpenseItem() {
  return (
    <div>
      <div>Date</div>
      <div>
        <h2>Title</h2>
        <div>Amount</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

We can update the doc with some info

```js
function ExpenseItem() {
  return (
    <div>
      <div>March 28, 2021</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.66</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

![car_inc image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/car_inc.png)

Not super nice looking but we can see it in browser.

Let's look at basic styling.
