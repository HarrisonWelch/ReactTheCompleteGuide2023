# Coding Exercise 11 Exercise Rendering Lists of Data

## Task

Output a todo list using multiple components using the already taught map function.

## Answer

App.js

```js
import React from "react";

import Todo from "./Todo";
import "./styles.css";

const DUMMY_TODOS = ["Learn React", "Practice React", "Profit!"];

// don't change the Component name "App"
export default function App() {
  return (
    <ul>
      {DUMMY_TODOS.map((todoItem) => (
        <Todo text={todoItem} />
      ))}
    </ul>
  );
}
```

Todo.js:

```js
import React from "react";

export default function Todo(props) {
  return <li>{props.text}</li>;
}
```
