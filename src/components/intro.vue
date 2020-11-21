<template>
  <div class="intro container__vertical-align">
    <div class="intro__hero" ref="contentRef">
      <div class="intro__content" >
        <h1>+2°C</h1>
        <p>
          Pour les États et les citoyens, la lutte contre le réchauffement climatique
          ne représente que peu un enjeu important du XXIe siècle.<br/><br/>
          Plusieurs solutions ont donc été mises en place pour limiter l'augmentation des gaz à effet de serre et donc par conséquent le réchauffement
          climatique mais le véritable problème vient des citoyens qui ne prennent pas conscience du véritable enjeu que cela représente.
        </p>
      </div>
      <div class="intro__img" >
        <img :src="heroImage" alt="">
      </div>
    </div>
    <div ref="buttonRef" class="app-container__button">
      <styled-button
        to="/temperatures"
        next-link
      />
    </div>
  </div>
</template>

<script>
import heroImage from '@/assets/img/hero.svg';
import { TimelineLite } from 'gsap';
import { ref } from 'vue';
import StyledButton from './styled-button.vue';

export default {
  components: {
    StyledButton,
  },
  setup() {
    const contentRef = ref(null);
    const buttonRef = ref(null);

    const enter = (el, done) => {
      const tl = new TimelineLite({ onComplete: done });
      tl.from(contentRef.value, { opacity: 0, duration: 0.5, y: -15 });
      const buttonAppearDuration = process.env.NODE_ENV === 'development' ? 0 : 0.5;
      tl.from(buttonRef.value, {
        opacity: 0, duration: buttonAppearDuration, y: 15, delay: 0.3,
      });
    };

    const leave = (el, done) => {
      const tl = new TimelineLite({ onComplete: done });
      tl.from(contentRef.value, { opacity: 0, duration: 0.5, y: 15 });
      tl.from(buttonRef.value, { opacity: 0, duration: 0.5, y: -15 });
    };

    return {
      enter,
      leave,
      contentRef,
      buttonRef,
      heroImage,
    };
  },
};
</script>

<style lang="scss">
.intro {
  @include md {
    flex-direction: column;
    justify-content: center;
  }

  &__hero {
    display: flex;
    justify-content: space-between;
    width: 100%;
    @include md {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  &__content {
    max-width: 500px;
  }
  &__img img{
    max-height: 300px;
  }

}
</style>
