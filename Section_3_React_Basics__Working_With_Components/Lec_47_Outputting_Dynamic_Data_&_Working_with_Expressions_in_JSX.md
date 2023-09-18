# Outputting Dynamic Data & Working with Expressions in JSX

Let's think about 1 obv problem... we won't have just one expense.

We want to have an unlimited amount of expenses.

It's not just about the extensibility but re-use. At the moment we are not able to do it.

Our current example of Car Ins payment is hardcoded. We should receive that code from somewhere and enter it into a form.

A component in React is just a function.

We have seen HTML and CSS but where is the JS (other than the function).

Let's do that.

Add some variables like so: 

```js
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28); // Just regular JS.
  const expenseTitle = "Car Insurance"; // Just regular JS.
  const expenseAmount = 294.67

  return (
    <div className="expense-item">
      <div>March 28, 2021</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

Dynamic data syntax: `{}` - single curly braces.

You can run basic JS inbetween them

```js
<h2>{1+1}</h2>
```

![we_see_2 image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/we_see_2.png)

Can also do things like built-in JS functions

```js
<h2>{Math.random()}</h2>
```

![math_random image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/math_random.png)

Everytime you reload the page you get a new number.

We can use our JS vars
```js
<h2>{expenseTitle}</h2>
```

![our_own_var image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/our_own_var.png)

Looks similar to before but the output is dynamic. The variable is hardcoded but it's just a first step

We can't call Date objects. Else get errors like: 

JS:
```js
<div>={expenseDate.toISOString()}</div>
```

ERR:
```
ERROR
Objects are not valid as a React child (found: [object Date]). If you meant to render a collection of children, use an array instead.
    at throwOnInvalidObjectType (http://localhost:3000/static/js/bundle.js:20165:13)
```

We can fix with just convert to String

```
<div>={expenseDate.toISOString()}</div>
```

We will refine this later on the date text, but we have dynamic place holder.

We will also update our dynamics knowledge later too.
