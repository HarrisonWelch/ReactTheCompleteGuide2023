# Dynamic Styles with CSS Modules

## Adding CSS Modules to CourseInput

- Comment out the old Styled Component and the import to use it.
- Switch the FormControl to a normal `div`
- Rename the CourseInput.css to CourseInput.module.css
- Then change the import to `import styles from "./CourseInput.module.css";`

Now the className prop can be changed to grab style from the `styles` object.

```js
<div className={`${styles["form-control"]} ${!isValid && styles.invalid}`}>
  ...
</div>
```

We have to use `styles["form-control"]` b/c hyphens in JS are annoying. Then we can use our templated-strings again to bring in the isValid trick to place the the `invalid` class name ont the div.

Final Product:

```js
import React, { useState } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";

// ... (FormControl Styled Component)

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
```

## Adding media query to Button

Simple as adding the below to the Button.module.css file. This time we need a selector.

```css
@media (min-width: 768px) {
  .button {
    width: auto;
  }
}
```

We will be using CSS modules from now on.
