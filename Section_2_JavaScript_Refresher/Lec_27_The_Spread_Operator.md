# The Spread Operator

`...` = Spread Op

```js
const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34
};

const newHobbies = ["Reading"];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);
```
Output
```
(3) ["Sports", "Cooking", "Reading"]
0: "Sports"
1: "Cooking"
2: "Reading"
```

CodeSandbox:

![spread_op image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/spread_op.png)

Incorrect way without the spread op `...`

```js
const hobbies = ["Sports", "Cooking"];
const user = {
  name: "Max",
  age: 34
};

const newHobbies = ["Reading"];

const mergedHobbies = [hobbies, newHobbies];
console.log(mergedHobbies);
```
Output
```
(2) [Array(2), Array(1)]
    0: Array(2)
        0: "Sports"
        1: "Cooking"
    1: Array(1)
        0: "Reading"
```

CodeSandbox:

![incorrect_spread image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/incorrect_spread.png)

## Also works with Objects (JSON)

```js
const user = {
  name: "Max",
  age: 34
};

const extendedUser = {
  isAdmin: true,
  ...user
};

console.log(extendedUser);
```

Output
```json
{isAdmin: true, name: "Max", age: 34}
```

CodeSandbox:

![json_spread image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/json_spread.png)

