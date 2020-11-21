<template>
  <div>
    <temperature-anomalies ref="comp"/>
  </div>
</template>

<script>
import { ref } from 'vue';
import TemperatureAnomalies from '@/components/temperature-anomalies.vue';

export default {
  components: { TemperatureAnomalies },
  setup() {
    const comp = ref(null);
    return {
      comp,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
