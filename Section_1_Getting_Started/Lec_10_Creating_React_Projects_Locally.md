# Lec 9 Creating React Projects Browser based vs Local Development

Full control is a local react project

Starting snapshot is available in the resources of Udemy sectioning.

Install Node JS
* https://nodejs.org/en
* For me 18.17.1 LTS

Open the downloaded project snapshot in your favorite code editor
* VSCode recommended editor: https://code.visualstudio.com/download

VsCode tweak
* Shortcut for Format Document
* File -> Preferences -> KeyBoard shortcuts
* Default is Shift+Alt+F on windows
* Install Prettier from the vscode extension marketplace

```
Name: Prettier - Code formatter
Id: esbenp.prettier-vscode
Description: Code formatter using prettier
Version: 10.1.0
Publisher: Prettier
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
```

Ctrl+` to open the terminal where we are in the vscode project folder is open

now run `npm install`
* Need a fresh restart of VSCode if on windows for the node install to take effect on the terminal
* Use this where a package.json file is present in the active directory

Run `npm start` to preview the React application
* Visit the address``
* See the starting project text
* Changes should auto update into the browser (Chrome, Firefox, etc)
* Ctrl+C to stop

## Create a project using the create react project
* https://create-react-app.dev/

```shell
npx create-react-app my-app
cd my-app
npm start
```

Don't need to run npm install, go to npm start to start a dev server. Visit the address in the same way

## Vite
* Create react projects
* https://vitejs.dev/guide/
