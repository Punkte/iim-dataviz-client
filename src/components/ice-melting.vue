<template>
  <app-container>
    <loader>
      <div class="page container__vertical-align">
        <chart :chart-data="chartData" ref="chartRef"/>
      </div>
    </loader>
  </app-container>
</template>

<script>
import chartData from '@/data/ice-melting/index';
import AppContainer from './app-container.vue';
import Chart from './chart.vue';
import Loader from './loader.vue';

export default {
  components: {
    AppContainer,
    Chart,
    Loader,
  },
  setup() {
    return {
      chartData,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
