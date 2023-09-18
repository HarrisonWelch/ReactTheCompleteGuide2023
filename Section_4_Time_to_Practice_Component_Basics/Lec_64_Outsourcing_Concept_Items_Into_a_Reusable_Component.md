# Outsourcing Concept Items Into a Reusable Component.md

Concept.js

```js
import "./Concept.css";

const Concept = (props) => {
  return (
    <li className="concept">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
};

export default Concept;
```

And App.js will use it like this

```js
import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

import Header from "./components/Header/Header";
import Concept from "./components/Concept/Concept";

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
      <ul id="concepts">
        <Concept
          image={concepts[0].image}
          title={concepts[0].title}
          description={concepts[0].description}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
        <Concept
          image={concepts[1].image}
          title={concepts[1].title}
          description={concepts[1].description}
        />
      </ul>
    </div>
  );
}

export default App;
```

Now all 3 tasks are solved.

![sec_4_final image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/sec_4_final.png)
