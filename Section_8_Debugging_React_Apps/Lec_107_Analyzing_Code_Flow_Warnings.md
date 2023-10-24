# Understanding React Error Messages

Could read "valueEndOfYear" property. Seems to be undefinded

The problem is in the `results` array. if that is empty we can't access the first element with `[0]`.

Results.jsx

```js
const initialInvestment =
  results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
```

This results array will only come back as empty if the duraction is not operable as a for-loop limit in the `calculateInvestmentResults` function.

```js
for (let i = 0; i < duration; i++) {...}
```

So we can add an if statment that gives "invalid..." output if the duration comes back as "not a number".

```js
if (results.length === 0) {
  return <p className="center">Invalid input data provided.</p>;
}
```
