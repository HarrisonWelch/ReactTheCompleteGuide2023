# More on the Arrow Function Syntax

## 1. If the arrow function takes exactly one parameter you may omit the wrapping parenthesis

```js
(username) => {...}
```
Can become
```js
username => {...}
```

No-params must be written like normal `() => {...}`

Multi-param cannot omit the parenthesis Ex `userName, message => {...}` would be invalid

## 2. Omitting function body curly braces

No curly braces required if the body only returns

```js
number => {
    return number * 3;
}
```
Can become
```js
number => return number * 3;
```

You cannot use if statements or anything else Ex `number => if (number === 2) { return 5 };`

## 3. Special case: Just returning an object

Returning 
```js
number => { age: number }
```
Would be invalid b/c JS reads that as function wrappers not an object

You can say it's an object like so:

```js
number => ({age: number});
```
