# Repetition Manging User Input with State Two Way Binding

So now lets make sure this player works.

Start with features we already know via `useState`

```js
import { useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState("");

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
```

We have to write a lot of code to understand this text and keystroke.

This is a great example for a component that can be simplified by using refs.
