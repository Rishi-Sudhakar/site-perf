
# site-perf

**site-perf** is an npm package that collects and visualizes performance metrics for web applications. It measures key performance indicators such as page load time, DNS lookup time, TCP handshake time, and resource load times, providing an easy way to analyze and optimize your web app's performance.

## Features

- **Metrics Collection**: Collects various performance metrics using the Performance API.
- **Data Visualization**: Visualizes performance metrics with `chart.js`.
- **Console Logging**: Logs collected metrics to the console.
- **JSON Export**: Exports collected metrics in JSON format.

## Installation

To install Perf Monitor, use npm:

```sh
npm install site-perf
```

## Usage

### Basic Setup

1. **Include Perf Monitor in your project**:

```js
const PerfMonitor = require('site-perf');
const perfMonitor = new PerfMonitor();
```

2. **Collect metrics**:

```js
perfMonitor.collectMetrics();
```

3. **Visualize metrics**:

Add a canvas element to your HTML where the chart will be rendered:

```html
<canvas id="perfChart" width="400" height="400"></canvas>
```

Initialize the visualization:

```js
window.onload = () => {
  perfMonitor.visualizeMetrics();
  console.log(perfMonitor.exportMetrics());
};
```

### Metrics Collected

- **Page Load Time**: Time taken for the page to load.
- **DOM Content Loaded Time**: Time taken for the DOM content to be fully loaded and parsed.
- **DNS Lookup Time**: Time taken for DNS lookup.
- **TCP Handshake Time**: Time taken for TCP handshake.
- **Resource Load Times**: Time taken to load various resources (scripts, images, stylesheets, etc.).

### Methods

- **collectMetrics()**: Collects performance metrics.
- **visualizeMetrics()**: Visualizes collected metrics using `chart.js`.
- **logMetrics()**: Logs collected metrics to the console.
- **exportMetrics()**: Exports collected metrics in JSON format.

## Development

### Project Structure

```
site-perf/
├── index.html
├── index.js
├── node_modules/
├── package.json
```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License.

---
