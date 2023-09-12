# Lec 3 ReactJS vs "Vanilla_JavaScript": Why use React?

Using "Just JavaScript" Isn't A (Great) Option
* Quickly becomes cumbersome
* Quickly becomes error-prone
* Quickly becomes hard-to-maintain
* React offers a way simpler "mental model"

CodeSandbox in browser dev project editor

Vanilla:
https://codesandbox.io/s/vanilla-js-demo-6049kj

React:
https://codesandbox.io/s/react-vs-vanilla-demo-uc08fv

In the vanilla file has the 
* buttons
* listeners

It is assumed you know JS 

## Reacy

React all comes from the index.js file

It's App.js that goes crazy
* Bunch of html code in App.js which looks weird

You can blend html and JS code

Notice the dynamic code example
```js
<button
className={activeContentIndex === 1 ? "active" : ""}
onClick={() => setActiveContentIndex(1)}
>
Core Features
</button>
```

More dynamic content at the bottom:

```js
<div id="tab-content">
    <ul>
        {content[activeContentIndex].map((item) => (
            <li key={item}>{item}</li>
        ))}
    </ul>
</div>
```

React `useState` with `setActiveContentIndex` to set the current UI

React = Declarativce UI Programming

* With React you define the target UI states - not the steps to get there
* Instead, React will figure out & perform the necessary steps
* Define the goal not the steps

Vanilla is imperative
* Define the steps not the goal
* Which is way more cumbersome and difficult
* Adding a 4th buttom would be painful

We define the stats and when they should change and React does the rest
