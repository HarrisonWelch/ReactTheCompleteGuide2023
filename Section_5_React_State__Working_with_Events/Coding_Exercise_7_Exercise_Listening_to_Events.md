# Exercise: Listening to Events

## Question

Make the button output "Stored!" in a console.log statement.

## Answer

```js
import React from 'react';

import './styles.css';
// don't change the Component name "App"
export default function App() {
    
    const clickHandler = () => {
        console.log("Stored!");
    }
    
    return <button onClick={clickHandler}>Bookmark</button>;
}
```

styles.css is unchanged.
