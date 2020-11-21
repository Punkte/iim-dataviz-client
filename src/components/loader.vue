<template>
 <transition
  @before-enter="beforeEnterLoad"
  @enter="enterLoad"
  @leave="leaveLoad"
  mode="out-in">
    <pixel-loader v-show="!canShow" @load="pixelLoaded"/>
  </transition>
  <transition
    @before-enter="beforeEnterLoad"
    @enter="enterLoad"
    @leave="leaveLoad"
  >
    <slot name="default" v-if="canShow" />
  </transition>

</template>

<script>
import { onMounted, ref } from 'vue';
import { TimelineLite } from 'gsap';
import { beforeEnterScale, enterScalein, leaveScaleOut } from '@/utils/transitions';
import PixelLoader from './pixel-loader.vue';

export default {
  setup(_, { emit }) {
    const canShow = ref(null);
    const tl = new TimelineLite();

    onMounted(() => {
      canShow.value = false;
    });

    const beforeEnterLoad = beforeEnterScale(tl);
    const enterLoad = enterScalein(tl);
    const leaveLoad = leaveScaleOut(tl);

    const pixelLoaded = () => {
      canShow.value = true;
      emit('load');
    };
    return {
      canShow,
      enterLoad,
      beforeEnterLoad,
      leaveLoad,
      pixelLoaded,
    };
  },
  components: {
    PixelLoader,
  },
};
</script>

<style lang="scss" scoped>

</style>
