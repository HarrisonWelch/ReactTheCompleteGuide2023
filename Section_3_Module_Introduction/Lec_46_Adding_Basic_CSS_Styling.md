# Adding Basic CSS Styling

Add `ExpenseItem.css` next to the component file.

Copy paste in the provided doc `ExpenseItem`:

<details>

<summary>Code: ExpenseItem.css</summary>

<br>
<p style="font-family:'Lucida Console', monospace">
.expense-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    padding: 0.5rem;
    margin: 1rem 0;
    border-radius: 12px;
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
</p>

</details>

Import with:
```js
import './ExpenseItem';
```

We use the css in our ExpenseItem like so:

```js
import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 28, 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.66</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
```

Note: we use className over class b/c class is reserved in HTML. className was made by the React team.

Which then gives us this in the browser:

![after_css image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/after_css.png)

(zoomed into 175% btw)

Still not the final look but much better

Be aware it's className over class. Other than that it's mostly normal CSS. This is not a CSS course so we won't go too much into it.

That is how we style our components.
