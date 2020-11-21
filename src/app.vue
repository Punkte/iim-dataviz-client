<template>
  <router-view v-slot="{ Component }">
    <transition
      @enter="enter"
      @leave="leave"
      :css="false"
      mode="out-in"
    >
      <component ref="page" :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import '@/assets/scss/style.scss';
import { getEnter, getLeave } from '@/utils/transitions';
import { ref } from 'vue';

export default {
  setup() {
    const page = ref(null);
    const enter = getEnter(page);
    const leave = getLeave(page);
    return {
      enter,
      leave,
      page,
    };
  },
};
</script>

<style lang="scss">
</style>
