# Introducing JSX

We got this JSX code which is basically HTML inside JavaScript

Stands for JavaScriptXML

This only works because there are transformations happening behind this scenes.

You can see the transformed code in the Chrome view -> F12

Go to Sources

I see bundle.js which contains ALOT of code, like 40k lines.

sources_react_init.png

You can see the transformed function App()...

```js
function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: "Let's get started!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}
```

Probably not code we would like to write

So we get the best of both worlds. Code that runs in the browser and code that is easier to write.

We write the JSX that is transformed behind the scenes.
