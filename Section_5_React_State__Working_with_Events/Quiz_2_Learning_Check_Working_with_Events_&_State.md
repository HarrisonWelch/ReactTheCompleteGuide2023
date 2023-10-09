# Learning Check Working with Events & State

## Question 1

How should you **NOT** listen to events when working with React?

### Answer

Adding an event listener (e.g. via "addEventListener") manually.

## Question 2

Which value should you pass to event listener props like onClick?

### Answer

A pointer at the function that should execute when the event occurs.

## Question 3

How can you communicate from one of your components to a parent (i.e. higher level) component?

### Answer

You can accept a function via props and call it from inside the lower-level (child) component to then trigger some action in the parent component (which passed the function).

## Question 4

How can you chnage what a component displays on the screen?

### Answer

Create some "state" value (via useState) which you can then change and output in JSX.

## Question 5

Why do you need this extra "state" concept instead of regular JS variables which you change and use?

### Answer

Because standard JS variable don't cause React components to be re-evaluated.

## Question 6

Which statement about `useState` is **NOT** correct?

### Answer

Calling useState again will update the state value.

The following are correct.

1. It receives an (optional) initial state value as an argument
2. It returns an array with exactly two elements

## Question 7

How can you update component state (created via useState)?

### Answer

You can call the state updating function which useState also returned.

## Question 8

How much state may you manage in one single component?

### Answer

You can have as many state slices as you need / want.

## Question 9

What wrong about this code snippet?

```js
const [counter, setCounter] = useState(1);
...
setCounter(counter + 1);
```

### Answer

If you update state that depends on the previous state, you should use the "function form" of the state updating function instead.
