# Coding Exercise 4: Exercise: Building a First Component

Build Component `ExerciseComponent` that prints "First exercise - done!"

## Answer

ExerciseComponent.js:
```js
import React from 'react';
// Todo: Add your component code
// Important: Use export default function MyCmp() { ... }, don't define "export default" on a separate line!

export default function ExerciseComponent() {
    return <h2>First exercise - done!</h2>;
}
```

App.js
```js
import React from 'react';
import ExerciseComponent from "./ExerciseComponent.js";

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Todo: solve exercise</p>
            <ExerciseComponent></ExerciseComponent>
        </div>
    );
}
```
