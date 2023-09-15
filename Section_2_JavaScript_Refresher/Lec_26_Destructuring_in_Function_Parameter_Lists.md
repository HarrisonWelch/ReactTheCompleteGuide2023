# Destructuring in Function Parameter Lists

Destructuring also works in param lists

```js
function storeOrder(order) {
    localStorage.setItem('id', order.id);
    localStorage.setItem('currency', order.currency);
}
```

Instead of the "dot notation" you can use dstructuring

```js
function storeOrder({id, currency}) {
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
```

Which will open up the object and give us access to `id` and `currency` in the function. "pulled out"

`storeOrder` only takes 1 param as an object still. Example:

```js
storeOrder({id: 5, currency: 'USD', amount: 15.99})
```

