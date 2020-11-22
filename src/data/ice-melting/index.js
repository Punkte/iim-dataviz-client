import json from './data.json';

const getLabels = (d) => Object.keys(d.data).map((k, i, a) => (k % 5 === 0 || i === a.length - 1 ? k : ''));
const getData = (d) => Object.values(d.data).map((item) => item.value);
const getDescription = (d) => d.description.title || '';

export const chartify = (type = 'bar', dataFile) => ({
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
    lineTension: 1,
    scaleStartValue: 20,
    legend: {
      labels: {
        fontColor: '#013A63',
        fontSize: 18,
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
          min: Math.min(...getData(dataFile)) - 0.5,
          max: Math.max(...getData(dataFile)) + 0.5,
          fontColor: '#013A63',
          beginAtZero: true,
          padding: 25,
        },
      }],
    },
  },
});

export default chartify('bar', json);
