import Chart from 'chart.js';

export const createChartJS = (domNode, chartData) => {
  const ctx = domNode;
  const myChart = new Chart(ctx, {
    ...chartData,
  });
  return myChart;
};

export default {
  createChartJS,
};
