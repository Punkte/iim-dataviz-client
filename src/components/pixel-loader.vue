<template>
    <app-container>
    <div class="page container__vertical-align">
      <h1>{{ currentYear }}</h1>
      <eight-bit
        :src="src"
        :scale="scaleValue || 5"
      />
    </div>
    </app-container>
</template>

<script>
import polarBear from '@/assets/img/ours-polaire.jpg';
import { computed, onMounted, ref } from 'vue';
import gsap, { Power1 } from 'gsap';
import AppContainer from './app-container.vue';
import EightBit from './eight-bit.vue';

export default {
  setup(props, { emit }) {
    const minYear = 1980;
    const maxYear = new Date().getFullYear();
    const currentYear = ref(minYear);

    const scaleValue = computed(() => (currentYear.value !== maxYear ? currentYear.value - (minYear - 1) : 100));

    onMounted(() => {
      gsap.to(currentYear, 3, {
        value: maxYear,
        roundProps: 'value',
        ease: Power1.easeIn,
        onComplete() {
          setTimeout(() => {
            emit('load');
          }, 500);
        },
      });
    });

    return {
      currentYear,
      scaleValue,
      polarBear,
    };
  },
  components: {
    AppContainer,
    EightBit,
  },
  props: {
    src: {
      type: [String, Object],
      default: polarBear,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
