# Revisiting Variables & Values

All about _data_ and in the end **values**

The tweets you read and write is data

The location you are in and want to go to is data

JS can handle a broad variety of values
* String
* Number
* Boolean
* Null & undefined
* Object

## String

```js
console.log("Hello World!");
```

`Variables` should store `Values`

Variables are Data containers
* Name of your choice
* Variable identifier to refer to it later

Why Use Variables?
* Reuse
* Readability

Rules & Recommendations for variable names
* Must not contain whitespace or special characters (except `$` and `_`)
* May contain numbers but cannot start with one
* Must not clash with reserved keywords
* Should use camelCasing
  * Ex: `userMessage`
  * **Not** Recommended: `user_message` (ala Python)
* Should describe what the "thing" it identifies contains or does

```js
let userMessage = "Hello World!";

console.log(userMessage);
```
Outputs
```
Hello World! 
```

All places will automatically update to that changed value

## Contants

`const` keyword

Key difference is that they must not be re-assigned

```js
const userMessage = "Hello World!";

userMessage = "this thing";

console.log(userMessage);
```

This breaks:

![const_break image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/const_break.png)

Certain devs want to make use of const as often as possible

Use whatever you want but know the difference.

