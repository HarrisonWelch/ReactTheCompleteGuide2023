# Using CSS Modules

Instructor likes default CSS.

Features in CSS Modules.

Docs: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

The create react-app React apps are already made to suppor CSS modules.

For this we will need to comment out the Styled Component and rename the css class to "Button.modules.css"

Import React as normal, but now we import css as a named entity `styles` from the newly renamed "Button.module.css"

```js
import React from "react";
// import styled from "styled-components";

import styles from "./Button.module.css";

// ... (Button as Styled Component)

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
```

Then we can add styles with the styles import `className={styles.button}`

Now it should react just as before.

The inspect will show a Button class with a random string unique hash string "Button_button\_\_12n0i23"

![102_inspect_Button_style image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/102_inspect_Button_style.png)

This does some transformation for us.
