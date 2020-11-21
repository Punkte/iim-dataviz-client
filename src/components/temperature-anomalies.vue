<template>
  <app-container>
    <transition @leave="contentLeave">
      <div
        v-show="visibleContent"
        ref="contentRef"
        class="page container__vertical-align"
      >
        <div class="page__content">
          <div class="temp-content">
            L'impact de l'homme sur le réchauffement climatique augmente considérablement.<br/><br/>
            Si cet impact n'est pas maîtrisé, le réchauffement climatique augmentera la probabilité d'impacts généralisés et irréversibles sur les populations et les différents écosystèmes.
          </div>
        </div>
        <div class="app-container__button" ref="buttonRef">
          <styled-button :next-link="true" @click="visibleContent = false" />
        </div>
      </div>
    </transition>
    <transition @before-enter="chartBeforeEnter" @enter="chartEnter" mode="out-in">
      <div>
        <div v-show="!visibleContent" ref="chartContainer" class="container__vertical-align">
          <div class="page container__vertical-align">
            <chart :chartData="chartData" ref="chartRef"/>
          </div>
        </div>
        <div v-if="!visibleContent" class="app-container__button" ref="buttonRef">
          <styled-button :next-link="true" :to="{ name: 'Pixels' }" />
        </div>
      </div>
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
  props: {
    src: {
      type: [String, Object],
      required: false,
    },
  },
};

</script>

<style lang="scss">
.page {
  flex-direction: column;
  width: 100%;
  &__content {
    margin-bottom: 16px;
    width: 100%;
  }

  .temp-content {
    max-width: 500px;
  }
}
</style>
