# Creating & Using a Custom Component

Start with the Header

Can and should omit the js extension.

Header.js
```js
import keyConceptsImage from "../../assets/images/key-concepts.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;
```

And now the App.js file can use it

App.js

```js
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

import Header from "./components/Header/Header";

function App() {
  const concepts = [
    {
      title: "Components",
      image: componentsImage,
      description:
        "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
      title: "State",
      image: stateImage,
      description:
        "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
      title: "Events",
      image: eventsImage,
      description:
        "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
  ];
  return (
    <div>
      <Header />
      ...
    </div>
  );
}

export default App;

```
