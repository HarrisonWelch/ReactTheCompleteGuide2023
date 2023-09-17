# Coding Exercise 6: Exercise: Component Composition

Create a Card wrapper component that wraps the Todo List and each item beneath.

## Answer

Card.js
```js
import React from 'react';

export default function Card(props) {
    return <div className="card">{props.children}</div>;
}
```

styles.css is left as it was in the problem

App.js:
```js
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <h1>Todos</h1>
            
            <Card>
              <p>Please note: Below are just the most important todos - feel free to add more.</p>
            </Card>
            
            <ul>
              <li className="todo">
                <Card>
                  <h2>Learn React</h2>
                  <p>Learn React fundamentals & explore core concepts</p>
                </Card>
              </li>
              <li className="todo">
                <Card>
                  <h2>Practice React</h2>
                  <p>Apply your knowledge & build demo projects</p>
                </Card>
              </li>
            </ul>
        </div>
    );
}
```
