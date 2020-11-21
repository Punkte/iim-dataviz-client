<template>
  <div class="chart">
    <canvas class="chart__canvas" ref="canvasRef"></canvas>
  </div>
</template>

<script>
import useChart from '@/compositions/useChart';

export default {
  inheritAttrs: true,
  setup(props) {
    const [canvasRef, chartInstance] = useChart(props.chartData);
    return {
      canvasRef,
      chartInstance,
    };
  },
  props: {
    chartData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.chart {
  position: relative;
  height: 500px;
  width: 100%;
  max-width: 1280px;

  @include md {
    height: 350px;
  }
}
</style>
