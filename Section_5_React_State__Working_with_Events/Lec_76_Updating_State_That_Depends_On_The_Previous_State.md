# Updating State That Depends On The Previous State

We can edit state like this, passing in a function. The parameter will always be guaranteed to be the prev state. Then we do the spread op plus updating the entered title.

```js
setUserInput((prevState) => {
    // Now we the prev state snapshot as "prevState"
    return {
        ...prevState,
        enteredTitle: event.target.value,
    };
    // This approach guarantees latest state update.
});
```
