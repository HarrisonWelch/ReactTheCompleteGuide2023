# Coding Exercise 12 Exercise Outputting Conditional Content

## Task

When the user presses a delete button show an "Are you sure?" dialog. If they press proceed, then remove this dialog. Either/Or should be displayed based on state.

## My answer

```js
import React from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [showConfirmDialog, updateShowConfirmDialog] = React.useState(false);
    
    // let showConfirmDialog = false;
    
    const updateShowConfirmDialogHandler = () => {
        updateShowConfirmDialog(prev=>!prev)
    }
    
    let content = <button onClick={updateShowConfirmDialogHandler}>Delete</button>;
    
    if (showConfirmDialog == true) {
        content = <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={updateShowConfirmDialogHandler}>Proceed</button>
        </div>;
    }
    
    return (
      <div>
        {content}
      </div>    
    );
}
```

