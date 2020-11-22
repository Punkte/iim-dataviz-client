import { createChartJS } from '@/utils/createChartJs';
import { onMounted, ref } from 'vue';

const useChart = (chartData) => {
  const canvasRef = ref(null);
  const chartInstance = ref(null);
  onMounted(() => {
    chartInstance.value = createChartJS(canvasRef.value, chartData);
  });
  return [
    canvasRef,
    chartInstance,
  ];
};

export default useChart;
