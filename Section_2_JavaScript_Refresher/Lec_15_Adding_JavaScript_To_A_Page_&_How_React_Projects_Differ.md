# Adding JavaScript To A Page & How React Projects Differ

Revisit certain crucial key concepts

JS Can be executed in many different environments
* Browsers - 90's intention
* Computer - Node.js and Deno can exe JS directly on the machine
* Mobile apps - ReactNative or Capacitor for native mobile apps for Android and iOS

Lets explore the website

## Between `<script>` Tags
```html
<script>
    alert('Hello')
</script>
```
* Can quickly lead to unmaintainable & complex HTML files
* Typically only used for very short files

## Via `<script>` import
```html
<script src="script.js"></script>
```
* Separates the code
* Maintaining complex apps gets easier

Over to the sandbox

Add to the head tag `"<script src="assets/scripts/app.js"></script>"` such that it loads with the webpags
* [defer](https://www.w3schools.com/tags/att_script_defer.asp) attribute will make the js load after the webpage is loaded
* `type="module"` - makes the js be treated as module which enables the `import` syntax.
* You can also export from a `util.js` and import that in `app.js` but that is covered later
* React will almost never use these script tags, they are injected by the build process
* React projects use a **build process**
