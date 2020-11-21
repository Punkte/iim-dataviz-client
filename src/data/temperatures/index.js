import json from './data.json';

const getLabels = (d) => Object.keys(d.data).map((k, i, a) => (k % 5 === 0 || i === a.length - 1 ? k : ''));
const getData = (d) => Object.values(d.data);
const getDescription = (d) => d.description.title || '';

export const chartify = (type = 'line', dataFile) => ({
  type,
  data: {
    labels: getLabels(dataFile),
    datasets: [
      {
        label: getDescription(dataFile),
        data: getData(dataFile),
        backgroundColor: getData(dataFile).map(() => 'rgba(137, 194, 217, .75)'),
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    lineTension: 1,
    legend: {
      labels: {
        fontColor: '#013A63',
      },
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#013A63',
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: Math.max(...getData(dataFile)) + 0.5,
          fontColor: '#013A63',
          beginAtZero: true,
          padding: 25,
          callback(value) {
            const displayedValue = (+value > 0 ? `+${value}°C` : `${value}°C`);
            return Number.isInteger(parseFloat(value, 10)) ? displayedValue : '';
          },
        },
      }],
    },
  },
});

export default chartify('line', json);
