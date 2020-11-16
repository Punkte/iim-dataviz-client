<template>
  <div class="home">
    <input type="number" v-model.number="scaleValue">
    <eight-bit
      :src="polarBear"
      :scale="scaleValue || 5"
    />
  </div>
</template>

<script>
import EightBit from '@/components/eight-bit.vue';
import { ref } from 'vue';
import polarBear from '@/assets/img/ours-polaire.jpg';

export default {
  name: 'Home',
  components: {
    EightBit,
  },
  setup() {
    const scaleValue = ref(5);
    return {
      scaleValue,
      polarBear,
    };
  },
};
</script>
