# Coding Exercise 14 Exercise Dynamic CSS Classes

Task similar to last time we are going to style a button when the button is pressed but this time using dynamic styles instead of inline.

## My Answer

```js
import React from "react";

// don't change the Component name "App"
export default function App() {
  const [isStyled, setIsStyled] = React.useState(false);

  const onClickHandler = () => {
    setIsStyled((prevState) => {
      return !prevState;
    });
  };

  return (
    <div>
      <p className={`${isStyled ? "active" : ""}`}>Style me!</p>
      <button onClick={onClickHandler}>Toggle style</button>
    </div>
  );
}
```
