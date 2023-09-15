# Analyzing a Standard React Project

We are mostly just writing JavaScript

`index.js` - first file will be exe by http://localhost:3000/ when u go there.

React is doing transforming behind the scene

We will write the code. With syntactic sugar.

It will take the code and transform it.

```js
import './index.css';
```
Will go towards bundling in the transformation process

```js
root.render(<App />);
```

HTML in JS? - works b/c transformed before going to browser

```js
import ReactDOM from 'react-dom/client';
```

We are importing some react dom package

package.json

```json
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
```

This is REACT the library. split across multiple packages but the same thing really. Both all about react and we are using react features.

Importing to this package.

Remember to export and import from file A and file B respectively

ReactDOM is exported from a package and we are importing it here.

The create Root is the start of our main application.

We have a single HTML file in public/index.hmtl

Remember that all other changes are handled by React

```html
<div id="root"></div>
```
^ we will render into the root. This div is where we want to attach/inject our React driven user interface.

Which is used here in index.js

```js
const root = ReactDOM.createRoot(document.getElementById('root')); // <--- 
```

Then on the root object we render it

```js
root.render(<App />);
```

What's inside of this div should be replaced with our APP.

Notice we are importing "App" from "./App".

```js
import App from './App';
```

Which comes from App.js:

```js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```

Syntax of JSX.

App is a component

The function is starting with a capital letter

We are returning HTML code in JS file, not something you regularly see.

This is a feature of JSX, invented and introduced by the React team.

Take a closer look at JSX in the next lecture.
