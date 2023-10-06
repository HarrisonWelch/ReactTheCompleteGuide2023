# Exercise: Using State with Form Inputs

## Question

Given a pre built form make the text below the form say "Valid message" if the input is 3 characters or greater. Else print "Invalid message".

## My Answer

```js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [enteredMessage, setMessageText] = React.useState("");
    
    const messageTextHandler = (event) => {
        setMessageText(event.target.value);
    }
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={messageTextHandler}/>
            <p>{enteredMessage.trim().length >= 3 ? "Valid message" : "Invalid message"}</p>
        </form>
    );
}
```
