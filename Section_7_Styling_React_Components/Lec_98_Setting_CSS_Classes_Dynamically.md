# Setting CSS Classes Dynamically

Alternative to inline styles

`invalid` CSS class should sometimes be added.

We want to add some extra className input into our div that surrounds the label and input.

So start we need some basic CSS

CourseInput.css

```css
.form-control.invalid input {
  border-color: red;
  background: #ffd7d7;
}

.form-control.invalid label {
  color: red;
}
```

Now we remove the current in-line CSS styles and change it to using JS string templates using back ticks \` `${}` \` where you can then drop in the dynamic function.

CourseInput.js

```js
return (
  <form onSubmit={formSubmitHandler}>
    <div className={`form-control ${!isValid ? "invalid" : ""}`}>
      <label>Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
);
```
