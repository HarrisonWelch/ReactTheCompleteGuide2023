# Outputting Key Concepts Data

App.js:

```js
...
<li className="concept">
    <img src={concepts[0].image} alt={concepts[0].title} />
    <h2>{concepts[0].title}</h2>
    <p>{concepts[0].description}</p>
</li>
...
```

Then repeat that in the `<ul>` tag


```js
...
<li className="concept">
    <img src={concepts[0].image} alt={concepts[0].title} />
    <h2>{concepts[0].title}</h2>
    <p>{concepts[0].description}</p>
</li>
<li className="concept">
    <img src={concepts[1].image} alt={concepts[1].title} />
    <h2>{concepts[1].title}</h2>
    <p>{concepts[1].description}</p>
</li>
<li className="concept">
    <img src={concepts[2].image} alt={concepts[2].title} />
    <h2>{concepts[2].title}</h2>
    <p>{concepts[2].description}</p>
</li>
...
```

That gets the data to print, but not the best solution
