# Coding Exercise 13 Exercise Dynamic Styles

## Task

Make a button that changes the color of text right above it change from white to red then back again.

## My Answer

```js
import React from "react";

// don't change the Component name "App"
export default function App() {
  const [isStyled, changeIsStyled] = React.useState(false);

  const onClickHandler = () => {
    changeIsStyled(!isStyled);
  };

  return (
    <div>
      <p style={{ color: isStyled ? "red" : "white" }}>Style me!</p>
      <button onClick={onClickHandler}>Toggle style</button>
    </div>
  );
}
```

Could make this better with the prevState pattern.

```js
const onClickHandler = () => {
  changeIsStyled((prevState) => {
    return !prevState;
  });
};
```
