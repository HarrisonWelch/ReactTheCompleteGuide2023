# How React Works

React is all about components

We write declaritive HTML.

React is responsible to generating and updating what is one the screen.

Ultimately its the HTML "Let's get started" that gets rendered to he screen

----

Add a new paragraph

```js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also available!</p>
    </div>
  );
}

export default App;

```

![this_avail image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/this_avail.png)

This imperative would be this

```js

  const para = document.createElement('p');
  para.textContent = 'This is also available!';
  document.getElementById('root').append(para);
```

Having to write all these instructions is very combersome.

React will generate the text for us behind the screen

----

Our first component is App in index.js

```js
import App from './App';
```

Let's build our first component in the next lecture.
