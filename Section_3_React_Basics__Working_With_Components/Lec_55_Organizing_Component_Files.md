# Organizing Component Files

Last lecture was JSX code under the hood

Here we only have a few components so we can leave it where it is rn. Larger projects.

Update the components folder to add
* Expenses
* UI

Expenses will contain
* ExpenseDate.css 
* ExpenseDate.js 
* ExpenseItem.css 
* ExpenseItem.js 
* Expenses.css 
* Expenses.js

UI
* Card.css
* Card.js

Update all the imports

App.js

```js
...
import Expenses from "./components/Expenses/Expenses";
...
```

And now most Expense components need to go up a level and down into the UI

Expenses.js, ExpenseList.js, ExpenseItem.js, 
```js
...
import Card from "../UI/Card";
...
```
