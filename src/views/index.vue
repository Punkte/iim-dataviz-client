<template>
  <app-container>
    <intro ref="comp"/>
  </app-container>
</template>

<script>
import AppContainer from '@/components/app-container.vue';
import Intro from '@/components/intro.vue';
import { ref } from 'vue';

export default {
  components: {
    AppContainer,
    Intro,
  },
  setup() {
    const comp = ref();
    return {
      comp,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
