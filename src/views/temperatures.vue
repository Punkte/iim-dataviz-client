<template>
  <div>
    <loader>
      <temperature-anomalies ref="comp"/>
    </loader>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import TemperatureAnomalies from '@/components/temperature-anomalies.vue';
import Loader from '@/components/loader.vue';

export default {
  components: {
    TemperatureAnomalies,
    Loader,
  },
  setup() {
    const comp = ref(null);
    const canShow = ref(null);

    onMounted(() => {
      canShow.value = false;
    });
    return {
      comp,
      canShow,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
