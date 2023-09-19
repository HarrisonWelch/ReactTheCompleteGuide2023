# Exercise: Working with State

Add an event listener that changes the price from 100 to 75 when the button is clicked.

## My Answer

```js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
// important: In this code editor, use React.useState() instead of just useState()
export default function App() {
    
    const [price, setPrice] = React.useState(100);
    
    const clickHandler = () => {
        setPrice(75);
    }
    
    return (
        <div>
            <p>${price}</p>
            <button onClick={clickHandler}>Apply Discount</button>
        </div>
    );
}
```

