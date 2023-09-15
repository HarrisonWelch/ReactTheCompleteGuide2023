# Revisiting Objects & Classes

Coming back to Objects now from the variables slide.

Objects can group multiple values together.

```js
// const userName = "Max";
// const userAge = 34;

const user = {
  name: "Max",
  age: 34
};
```

![object_user image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/object_user.png)

Can also add methods in JSONs

```js
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    return 1;
  }
};
```

## this keyword

Can grab information from inside the object

```js
const user = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.age);
    return 1;
  }
};
```

Output
```
...
Hello! 
34
```

## Class

Start with capital case letter

```js
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello!");
  }
}

// Now instantiate

const user1 = new User("Manuel", 35);
console.log(user1);

// Also now has the greet method

user1.greet();
```

Output
```
{name: "Max", age: 34, greet: ƒ greet()}
Max 
Hello! 
34
User {name: "Manuel", age: 35, constructor: Object}
Hello! 
```

![revisiting_objects image](https://github.com/HarrisonWelch/ReactTheCompleteGuide2023/blob/main/Screenshots/revisiting_objects.png)
