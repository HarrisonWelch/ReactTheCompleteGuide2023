# Exercise: Updating State Based On Older State

## Question

Make a paragraph tag respond to a click counter by incrementing it by 1 each time the button is pressed.

## My Answer

```js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [userInput, setUserInput] = React.useState(0);
    
    const buttonClickHandler = (event) => {
        setUserInput(prevState => prevState + 1);
    };
    
    return (
      <div>
        <p id="counter">{userInput}</p>
        <button onClick={buttonClickHandler}>Increment</button>
      </div>
    );
}

```
