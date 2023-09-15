# Arrays & Array Methods like map()

Arrays are special Objects

```js
const hobbies = [];
```

List of values

Get index value
```js
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);
```
Output
```
Sports
```

Super common value type. Quite often need to store a list of values.
* Ex: the content array from Section 1.

Arrays can contain any number of values. Event arrays of arrays - nesting them.

## Built in utility array methods

```js
const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");

console.log(hobbies);
```
Output
```
(4) ["Sports", "Cooking", "Reading", "Working"]
```

CodeSandbox:

![push_working image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/push_working.png)

### Find Index

```js
hobbies.findIndex((item) => {
  return item === "Sports";
});
```

Executes for every item in the list, until it finds the obj and return the index or `-1` if not found.

```
const index = hobbies.findIndex((item) => {
  return item === "Sports";
});

console.log("index = " + index);
```

Can shorten

```js
const index = hobbies.findIndex((item) => item === "Sports");
```

## .map() method

Every item in the array. Return every item it should be transformed to.

The array will stay the same unless bound to a new var.

```js
const edittedHobbies = hobbies.map((item) => item + "!");
console.log("edittedHobbies = " + edittedHobbies);
```
Output
```
edittedHobbies = Sports!,Cooking!,Reading!,Working! 
```

Can also convery to JSON

```js
const edittedHobbies = hobbies.map((item) => ({ text: item }));
console.log(edittedHobbies);
```

Output

```
(4) [Object, Object, Object, Object]
0: Object
text: "Sports"
1: Object
text: "Cooking"
2: Object
text: "Reading"
3: Object
text: "Working"
```

CodeSandbox:

![map_to_object image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/map_to_object.png)
