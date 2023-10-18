# Introducting Styled Components

Being able to set styles dynamically is really important.

On a larger project. Styles can spill over to other components.

Approach nubmer one

"Styled Components"

Build components with styles attached to them that are really only linked to the specific components.

Stop the app and in the project location enter this.

```sh
npm install styled-components
```

CodeSandbox - Add in dependencies, super simple.

Now we can use something called tagged templates from JS which are in they style-components package.

The base CSS can be added without a `button` selector. Then the psuedo-selectors can be changed to `&`.

Button.js:

```js
import styled from "styled-components";

import "./Button.css";

const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`; // template-tagged from vanilla JS

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
```

What happens is `styled-components` will generate random classnames that are unique and then places them in the global context.
