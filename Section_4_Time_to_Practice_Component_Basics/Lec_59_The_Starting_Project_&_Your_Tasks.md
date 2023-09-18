# The Starting Project & Your Tasks

Find the starting project attached.

Images as dynamic components

Output the infomation

Your tasks
* Output the key concepts to the screen
* Identify Possible Components
  * Analyze JSX code and suggest possible components
* Create & Use those custom components

## Output the key concepts

For that I need to dynamically drawn in the array information using curly braces.

We get this in App.js

```js
import keyConceptsImage from "./assets/images/key-concepts.png";
import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

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
      <header>
        <img src={keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
      <ul id="concepts">
        <li className="concept">
          <img src={concepts[0].image} alt={concepts[0].description} />
          <h2>{concepts[0].title}</h2>
          <p>{concepts[0].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[1].image} alt={concepts[1].description} />
          <h2>{concepts[1].title}</h2>
          <p>{concepts[1].description}</p>
        </li>
        <li className="concept">
          <img src={concepts[2].image} alt={concepts[2].description} />
          <h2>{concepts[2].title}</h2>
          <p>{concepts[2].description}</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
```

## Identify Possible Components
* Concept component for holding all the information of one component.
* Concepts component for holding multiple concept components
* Card for holding onto the CSS of each concept
* Header component for holding on to the centered information

## My solution

Concept.js

```js
import Card from '../UI/Card/Card';
import './Concept.css';


const Concept = (props) => {
  return (
    <div>
      <li className="concept">
        <Card>
            <img src={props.concept.image} alt={props.concept.description} />
            <h2>{props.concept.title}</h2>
            <p>{props.concept.description}</p>
        </Card>
      </li>
    </div>
  );
};

export default Concept;
```

Concept.css

```css
.concept {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(#250358, #440c66);
  padding: 1.5rem;
  border-radius: 6px;
  box-shadow: 0 2px 20px rgba(234, 78, 240, 0.2);
  width: 33%;
  transition: all 0.2s;
}

.concept:hover {
  transform: translateY(-2px);
  transition: transform 0.2s;
  box-shadow: 0 2px 30px rgba(234, 78, 240, 0.4);
}

.concept img {
  width: 6rem;
  height: 5rem;
  object-fit: contain;
}

.concept h2 {
  margin: 0;
  font-size: 1rem;
  text-transform: uppercase;
}

.concept p {
  margin: 0;
  text-align: center;
  font-size: 0.85rem;
}
```

Concepts.js
```js
import Concept from '../Concept/Concept.js';
import './Concepts.css';

const Concepts = (props) => {
  return (
    <ul id="concepts">
      <Concept concept={props.concepts[0]} />
      <Concept concept={props.concepts[1]} />
      <Concept concept={props.concepts[2]} />
    </ul>
  );
};

export default Concepts;

```

Concept.css
```css
#concepts {
  max-width: 50rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

```

Header.js

```js
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <img src={props.image} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default Header;

```

Header.css

```css
header {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
}

header img {
  width: 7rem;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
}

header p {
  margin: 0;
}

```

Card.js

```js
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;

```

Card.css

```css
/* Nothing */
```

On to the hint section
