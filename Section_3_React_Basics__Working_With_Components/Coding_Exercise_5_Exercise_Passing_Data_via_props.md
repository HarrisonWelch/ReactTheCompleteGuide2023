# Coding Exercise 5: Exercise: Passing Data via "props"

You're working on a UI prototype. Make Product component and pass it data such as title, price, and description.

## Answer

App.js:
```js
import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const products = [
        {
            title: "Product 1",
            price: 10,
            description: "First product"
        },
        {
            title: "Product 2",
            price: 20,
            description: "Second product"
        }
    ]
    
    return (
        <div>
            <h1>My Demo Shop</h1>
            <Product
                title={products[0].title}
                price={products[0].price}
                description={products[0].description}></Product>
            <Product
                title={products[1].title}
                price={products[1].price}
                description={products[1].description}></Product>
        </div>
    );
}
```

Product.js
```js
import React from 'react';

export default function Product(props) {
    return (
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}
```

styles.css is unchanged from the provided.
