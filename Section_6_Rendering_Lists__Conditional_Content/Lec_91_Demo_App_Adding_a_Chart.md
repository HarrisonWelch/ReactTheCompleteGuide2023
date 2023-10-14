# Lec 91 Demo App Adding a Chart

Going to do the chart now from description earlier.

This lecture makes the Chart and ChartBar components

Chart.js

```js
import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div class="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
```

Chart.css

```css
.chart {
  padding: 1rem;
  border-radius: 12px;
  background-color: #f8dfff;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
}
```

ChartBar.js - empty for now

```js

```

ChartBar.css

```css
.chart-bar {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-bar__inner {
  height: 100%;
  width: 100%;
  border: 1px solid #313131;
  border-radius: 12px;
  background-color: #c3b4f3;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.chart-bar__fill {
  background-color: #4826b9;
  width: 100%;
  transition: all 0.3s ease-out;
}

.chart-bar__label {
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
}
```
