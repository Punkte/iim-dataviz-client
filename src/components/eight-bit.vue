<template>
  <div class="bit-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<script>
import {
  onMounted,
  ref, toRefs, watch,
} from 'vue';
import eightBitify from '@/utils/eightBitify';

export default {
  setup(props) {
    const canvasRef = ref(null);
    const p = toRefs(props);
    const updateImage = () => {
      if (canvasRef.value !== null) {
        const img = new Image(...props.dimension);
        img.onload = () => { eightBitify(canvasRef.value, img, props.scale); };
        img.src = props.src;
      }
    };
    onMounted(updateImage);
    watch([p.src, p.scale], updateImage, { immediate: true });

    return {
      canvasRef,
    };
  },
  props: {
    src: {
      type: String,
      default: '',
    },
    scale: {
      type: Number,
      default: 0,
    },
    dimension: {
      type: Array,
      default: () => [500, 500],
    },
  },
};
</script>

<style lang="scss">
.bit-container {
  width: 500px;
  height: 500px;

  canvas {
    width: 100%;
  }
}
</style>
