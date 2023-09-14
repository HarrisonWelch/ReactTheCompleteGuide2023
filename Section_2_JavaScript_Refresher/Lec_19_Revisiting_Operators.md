# Revisiting Operators

```js
// ARITHMETIC
console.log("10 + 5 = " + (10 + 5));
console.log("10 - 5 = " + (10 - 5));
console.log("10 * 5 = " + 10 * 5);
console.log("10 / 5 = " + 10 / 5);
console.log("10 % 5 = " + (10 % 5));
console.log("hello " + "world");

// RELATIONAL
console.log("10 === 10 = " + (10 === 10));
console.log("10 === '10' = " + (10 === "10")); // Type compare would make false
console.log("10 == '10' = " + (10 == "10")); // now its true

console.log("10 >= 5 = " + (10 >= 5));
console.log("10 <= 5 = " + (10 <= 5));
console.log("10 > 5 = " + (10 > 5));
console.log("10 < 5 = " + (10 < 5));

// Usually used in 'if' statements
if (10 === 10) {
  console.log("works");
}
```

Output

```
10 + 5 = 15 
10 - 5 = 5 
10 * 5 = 50 
10 / 5 = 2 
10 % 5 = 0
hello world 
10 === 10 = true 
10 === '10' = false 
10 == '10' = true 
10 >= 5 = true 
10 <= 5 = false 
10 > 5 = true 
10 < 5 = false 
works 
```
