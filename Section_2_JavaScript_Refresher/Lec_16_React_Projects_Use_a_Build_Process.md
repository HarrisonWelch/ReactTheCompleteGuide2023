# React Projects Use a Build Process

React project demo: https://codesandbox.io/s/react-vs-vanilla-demo-uc08fv

The html does not have a script tag

WHy is the app working

React project use a build process

The code you write is not the code that gets executed

Instead the code is transformed before being handed off to the browser

You can see that tool in the `package.json` file

```json
{
  "name": "react-vs-vanilla-demo",
  "version": "1.0.0",
  "description": "",
  "keywords": [],
  "main": "src/index.js",
  "dependencies": {
    "loader-utils": "3.2.1",
    "react": "18.2.0", // <--------- REACT!
    "react-dom": "18.2.0",
    "react-scripts": "5.0.1" // <--------- React scripts provides tools to transform it behind the scenes. Before the browser loades it
  },
  "devDependencies": {
    "@babel/runtime": "7.13.8",
    "typescript": "4.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ]
}
```

Take a look at the runnning website, https://uc08fv.csb.app/, and then open the F12 inspect menu

![react_script_inject image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/Screenshots/react_script_inject.png)

This preview website is running on a dev server. Locally we had to run a local server with `npm start`. It does the same thing locally.

Why does it need to be transformed.
1. Raw unprocessed React code won't execute naturally in the browser
      * Uses this JSX code. HTML code which is written in JS files. Non-standard JS
      * Trying to put a div in the app.js will crash the site and say that JSX is not currently enabled.

![jsx_not_enabled_hello image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/Screenshots/jsx_not_enabled_hello.png)

2. Code will not be optimized for production (not minified)
      * Code is unreadable but valid JS in the end
      * Highly optimized to reduce download size by the browser

React projects require a build process that transforms your code
* create-react-app, vite etc give you such a build process (no custome setup or tweaking needed)
* Also the reason why we need to install Node JS on your local computer

We don't need JSX for this refresher going forward.
