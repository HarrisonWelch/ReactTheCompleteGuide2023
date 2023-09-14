# "import" & "export"

Better to split code across multiple files for ease of management.

```js
let apiKey = "naowiefn211224"
```
* `let` makes variables
* apiKey is a string

Add export to make it available to other files

```js
export let apiKey = "naowiefn211224";
```

Then we can import

```js
import { apiKey } from "./util.js";
```
* Case sensitive
* Relative path - `.` for same folder and `..` for going up a path
* `.js` is usaully omitted react

Then we can conosle log it out

```js
console.log(apiKey);
```

Output
![console image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/console.png)

React will take all imports and exports are merged and imported with the oldschool context.

This is not the only way to import export

## `default` export

just export the value

```js
export default "naowiefn211224";
```

We can only have one export variable per file

For the import, it becomes different like so

```js
import apiKey from "./util.js";

console.log(apiKey);
```

React components from each file


## Multiple named export

```js
export let apiKey = "naowiefn211224";
export let abc = "abc";
```

then import

```js
import { apiKey, abc } from "./util.js";

console.log(apiKey);
console.log(abc);
```

default exports can mix with named, just can't have more that one default

Can aslo import as a JSON

```js
import * as util from "./util.js";

console.log(util.apiKey);
console.log(util.abc);
```

Using the name we just gave it and the `.` dot-notation

Output is the same
```
naowiefn211224 
abc 
```

Can also alias the imports:
```js
import { apiKey, abc as content } from "./util.js";

console.log(apiKey);
console.log(content);
```
