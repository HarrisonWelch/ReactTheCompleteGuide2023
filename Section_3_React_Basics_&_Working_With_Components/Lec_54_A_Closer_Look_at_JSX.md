# A Closer Look At JSX

Earlier in this module it was mentioned to open the inspect HTML menu ie F12.

![inspect_breakdown image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/inspect_breakdown.png)

In the node modules we have react and react-dom

In older React projects you had to

```js
import React from 'react';
```

... every time you needed JSX

JSX is just syntactic sugar.

```js
return React.createElement(
"div",
{},
React.createElement("h2", {}, "Let's get started!"),
React.createElement(Expenses, {items: expenses})
);
```

^ this is the alt to the JSX return

```js
return (
<div>
    <h2>Let's get started</h2>
    <Expenses items={expenses} />
</div>
);
```

Easy to see the later is easier to read than the former
