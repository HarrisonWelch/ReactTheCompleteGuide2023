# Lec 92 Adding Dynamic Styles

The heigh of our bar in the bar chart component needs to be calculated and generated dynamically.

You can use the style tag and pass in an object dynamically. Note that any CSS props that require hyphens will need to be surrounded by quotes. Note that any string values will also need to be surrounded by quotes like setting the background color to `"red"`.

```js
style={{ height: barFillHeight }}
```

Impl in ChartBar.js:

```js
import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  // Calc how much this should be filled
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
```
