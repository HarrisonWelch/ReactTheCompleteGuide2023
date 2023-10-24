# Understanding React's "Strict Mode"

The results array was brought into the Results tab. Move it out to show off some StrictMode problems.

```js
const results = [];
```

Two children have the same key

Execute every component twice. It would perform badly. But it helps you find problems with re-rendering things.

Items outside the component are not re-rendered by React.

![109_Strict_Mode image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/109_Strict_Mode.png)

So as seen above we render this list and it just gets longer and longer. While our console screams in red over on the left.

Bring the array back in to solve this problem.
