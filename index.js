// index.js
const Chart = require('chart.js');

class PerfMonitor {
  constructor() {
    this.metrics = {};
    this.chart = null;
  }

  collectMetrics() {
    window.addEventListener('load', () => {
      const timing = performance.timing;
      this.metrics = {
        pageLoadTime: timing.loadEventEnd - timing.navigationStart,
        domContentLoadedTime: timing.domContentLoadedEventEnd - timing.navigationStart,
        dnsLookupTime: timing.domainLookupEnd - timing.domainLookupStart,
        tcpHandshakeTime: timing.connectEnd - timing.connectStart,
        resourceLoadTimes: performance.getEntriesByType('resource').map(resource => ({
          name: resource.name,
          duration: resource.duration
        }))
      };
      this.logMetrics();
    });
  }

  logMetrics() {
    console.log('Performance Metrics:', this.metrics);
  }

  visualizeMetrics() {
    const ctx = document.getElementById('perfChart').getContext('2d');
    const resourceLabels = this.metrics.resourceLoadTimes.map(resource => resource.name);
    const resourceData = this.metrics.resourceLoadTimes.map(resource => resource.duration);

    const data = {
      labels: ['Page Load Time', 'DOM Content Loaded Time', 'DNS Lookup Time', 'TCP Handshake Time', ...resourceLabels],
      datasets: [{
        label: 'Performance Metrics',
        data: [this.metrics.pageLoadTime, this.metrics.domContentLoadedTime, this.metrics.dnsLookupTime, this.metrics.tcpHandshakeTime, ...resourceData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          ...resourceLabels.map(() => 'rgba(153, 102, 255, 0.2)')
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          ...resourceLabels.map(() => 'rgba(153, 102, 255, 1)')
        ],
        borderWidth: 1
      }]
    };

    this.chart = new Chart(ctx, {
      type: 'bar',
      data,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return context.label + ': ' + context.raw + ' ms';
              }
            }
          }
        }
      }
    });
  }

  exportMetrics() {
    return JSON.stringify(this.metrics, null, 2);
  }
}

module.exports = PerfMonitor;
