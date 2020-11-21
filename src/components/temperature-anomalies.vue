<template>
  <app-container>
    <transition @leave="contentLeave">
      <div
        v-show="visibleContent"
        ref="contentRef"
        class="page container__vertical-align"
      >
        <div class="page__content">
          L'influence de l'homme sur le système climatique est claire et croissante.<br/>
          Si elle n'est pas maîtrisée, le réchauffement climatique augmentera la probabilité d'impacts généralisés et irréversibles sur les populations et les écosystèmes.
        </div>
        <div class="app-container__button" ref="buttonRef">
          <styled-button :next-link="true" @click="visibleContent = false" />
        </div>
      </div>
    </transition>
    <transition @before-enter="chartBeforeEnter" @enter="chartEnter" mode="out-in">
      <template #default>
        <div v-show="!visibleContent" ref="chartContainer" class="container__vertical-align">
          <div class="page container__vertical-align">
            <chart :chartData="chartData" ref="chartRef"/>
          </div>
        </div>
      </template>
    </transition>
  </app-container>
</template>

<script>
import { TimelineLite, TweenMax } from 'gsap';
import { ref } from 'vue';
import chartData from '@/data/temperatures/index';
import AppContainer from './app-container.vue';
import StyledButton from './styled-button.vue';
import Chart from './chart.vue';

export default {
  setup() {
    const contentRef = ref(null);
    const buttonRef = ref(null);
    const visibleContent = ref(true);
    const chartContainer = ref(null);
    const chartRef = ref(null);

    const initialChartValues = ref(null);

    const enter = (el, done) => {
      const tl = new TimelineLite({ onComplete: done });
      tl.from(contentRef.value, { opacity: 0, duration: 1, delay: 0.3 });
      const buttonAppearDuration = process.env.NODE_ENV === 'development' ? 0 : 0.5;
      tl.from(buttonRef.value, {
        opacity: 0, duration: buttonAppearDuration, y: 15,
      });
    };

    const contentLeave = (el, done) => {
      TweenMax.to(el, 0.5, {
        opacity: 0,
        onComplete: done,
      });
    };
    const chartBeforeEnter = () => {
      TweenMax.set(chartContainer.value, {
        opacity: 0,
      });
      initialChartValues.value = chartRef.value.chartInstance.data.datasets[0].data;
      chartRef.value.chartInstance.data.datasets[0].data = chartRef.value.chartInstance.data.datasets[0].data.map(() => 0);
    };
    const chartEnter = (el, done) => {
      TweenMax.to(chartContainer.value, 1, {
        opacity: 1,
        duration: 5,
        onComplete() {
          chartRef.value.chartInstance.data.datasets[0].data = initialChartValues.value;
          chartRef.value.chartInstance.update();
          done();
        },
      });
    };
    return {
      // dom refs
      contentRef,
      buttonRef,
      chartContainer,
      chartRef,

      // transitions
      enter,
      contentLeave,
      chartEnter,
      chartBeforeEnter,

      // values
      visibleContent,
      chartData,
    };
  },
  components: {
    AppContainer,
    StyledButton,
    Chart,
  },
};

</script>

<style lang="scss">
.page {
  flex-direction: column;
  width: 100%;
  &__content {
    margin-bottom: 16px;
  }
}
</style>
