# Coding Exercise 15 - Fix Errors

## Task

Find all errors in the code.

Starting problem:

```js
import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <Div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onclick={clickHandler}>Click me!</button>
    </Div>
  );
}
```

## My answer

Looks like its
- "Div" tag with a capital "D"
- "onclick" instead of "onClick"

```jsx
import React from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}
```
