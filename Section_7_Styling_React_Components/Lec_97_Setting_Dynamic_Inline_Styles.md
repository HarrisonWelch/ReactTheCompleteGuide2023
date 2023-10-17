# Setting Dynamic Inline Styles

Entering a blank goal gives a small

In the CourseInput.js file we add a trim and length check against zero to the entered value which is already state managed.

```js
...
const formSubmitHandler = (event) => {
event.preventDefault();

if (enteredValue.trim().length === 0) {
    return;
}

props.onAddGoal(enteredValue);
};
...

```

This works, but we don't give the user any feedback that the input is bad.

At least the initial solution would involve an extra peice of state.

```js
const [isValid, setIsValid] = useState(true);
```

Then on the form submitHandler we set this to NOT valid is the length is 0.

```js
const formSubmitHandler = (event) => {
  event.preventDefault();

  if (enteredValue.trim().length === 0) {
    setIsValid(false);
    return;
  }

  props.onAddGoal(enteredValue);
};
```

And in the JSX we add dynamic styles to change the label to red.

```js
<label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
```

We can then add some cool stuff to the background and border

```js
<input
  style={{
    borderColor: !isValid ? "red" : "black",
    background: !isValid ? "salmon" : "transparent",
  }}
  type="text"
  onChange={goalInputChangeHandler}
/>
```

So we have a base color and then override it with the inline style.

Lets work first on the reset functionality

Simply change the input change function up above.

```js
const goalInputChangeHandler = (event) => {
  if (event.target.value.trim().length > 0) {
    setIsValid(true);
  }
  setEnteredValue(event.target.value);
};
```
