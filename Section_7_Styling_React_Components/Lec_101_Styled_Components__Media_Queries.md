# Styled Components Media Queries

One last thing on style. Media Queries.

Button can span the width on a small device.

How to add a media query on styled components?

Button.js

```js
const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  @media (min-width: 768px) {
    width: auto
  }
  ...
`;
```

The `@media` is for the big-screen aka Desktop where it will take up only a small part of the screen. But because we set `  width: 100%;` now the button will style to be the full width when view on a phone like the Pixel 5 or something skinny like it.
