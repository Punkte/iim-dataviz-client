q<template>
 <transition
  @before-enter="beforeEnterLoad"
  @enter="enterLoad"
  @leave="leaveLoad"
  mode="out-in">
    <pixel-loader :src="src" v-show="!canShow" @load="pixelLoaded"/>
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
import {
  onMounted, onUnmounted, ref, watch,
} from 'vue';
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

    onUnmounted(() => {
      document.body.style.overflow = null;
    });

    watch(canShow, (v) => {
      if (v) {
        document.body.style.overflow = null;
      } else {
        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
      }
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
  props: {
    src: {
      type: [String, Object],
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
