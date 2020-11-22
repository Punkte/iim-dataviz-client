<template>
  <app-container>
    <div ref="comp" class="page container__vertical-align join-us">
      <div class="text-container join-us__text">
        <h1>
          Changeons notre avenir
        </h1>
        <p>
          Pour avoir plus d’informations sur ces enjeux et comment les éviter, n’hésitez pas à nous suivre sur Instagram
        </p>
        <a href="https://instagram.com/plus_2_degres" target="_blank">
          <img :src="instagramLogo" class="join-us__logo"/>
        </a>
      </div>
    </div>
  </app-container>
</template>

<script>
import AppContainer from '@/components/app-container.vue';
import instagramLogo from '@/assets/img/instagram-logo.png';
import { ref } from 'vue';

export default {
  setup() {
    const comp = ref();
    return {
      comp,
      instagramLogo,
    };
  },
  components: {
    AppContainer,
  },
};
</script>

<style lang="scss">
.join-us {
  &__text {
    text-align: center;
  }
  &__logo {
    width: 50px;
  }
}
</style>
