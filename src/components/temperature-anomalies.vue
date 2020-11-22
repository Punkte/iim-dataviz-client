<template>
  <app-container>
    <transition @leave="contentLeave">
      <div
        v-if="visibleContent"
        ref="contentRef"
        class="page container__vertical-align temperature-anomalies"
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
      <div v-show="!visibleContent">
        <div ref="chartContainer" class="container__vertical-align">
          <div class="page container__vertical-align temperature-anomalies">
            <chart :chartData="chartData" ref="chartRef"/>
            <div class="text-container">
              <h3>Les causes</h3>
              <p>
              Le réchauffement climatique est dû à un phénomène appelé l'effet de serre et plus particulièrement aux gaz&nbsp;à&nbsp;effet&nbsp;de&nbsp;serre.<br>
              Il existe plusieurs gaz à effet de serre dont le dioxyde de carbone et ils ont tendance à augmenter depuis de nombreuses années.
              <br>
              <br>
              Les gaz à effet de serre sont rejetés d'une part par les activités humaines (industrie, transport, agriculture, …) et d'autre part par des phénomènes naturels (volcans, soleil, pergélisol...) et ont pour rôle de piéger la chaleur dans l'atmosphère.
              </p>
              <h3>Les conséquences</h3>
              <p>
              Le réchauffement climatique ne cesse de se poursuive et entraîne de nombreuses conséquences sur l'environnement (dérèglement du climat, affectation des populations et perturbation de l'économie).
              </p>
            </div>
          </div>
          <div v-if="!visibleContent" class="app-container__button" ref="buttonRef">
            <styled-button :next-link="true" :to="{ name: 'IceMelting' }" />
          </div>
        </div>
      </div>
    </transition>
  </app-container>
</template>

<script>
import { TimelineLite } from 'gsap';
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
      const tl = new TimelineLite();
      tl.to(el, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        onComplete: done,
      });
    };
    const chartBeforeEnter = () => {
      const tl = new TimelineLite();
      tl.set(chartContainer.value, {
        opacity: 0,
        scale: 0.9,
      });
      initialChartValues.value = chartRef.value.chartInstance.data.datasets[0].data;
      chartRef.value.chartInstance.data.datasets[0].data = chartRef.value.chartInstance.data.datasets[0].data.map(() => 0);
    };
    const chartEnter = (el, done) => {
      const tl = new TimelineLite();
      tl.to(chartContainer.value, {
        opacity: 1,
        scale: 1,
        duration: 1,
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

  &.temperature-anomalies {
    @include md {
      .app-container__button {
        bottom: 16px;
      }
    }
  }
}
</style>
