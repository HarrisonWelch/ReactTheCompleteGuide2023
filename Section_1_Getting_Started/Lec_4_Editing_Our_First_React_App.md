# Lec 4 Editing Our First React App

Remember React is declarative, define the goal not the steps.

Time to get our hands dirty!

Start with new demo app: https://codesandbox.io/s/first-react-app-start-7ec9fd

New 4th array object is available up top in the file. We need to make a new button "React vs JS" to show this.

```js
<button
className={activeContentIndex === 3 ? "active" : ""}
onClick={() => setActiveContentIndex(3)}
>
    React vs JS
</button>
```

![sandbox_4th_button image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/sandbox_4th_button.png)

Finished React app: https://codesandbox.io/s/first-react-app-zj5cx1
