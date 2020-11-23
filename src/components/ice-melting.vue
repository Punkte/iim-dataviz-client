<template>
  <app-container>
    <loader :src="penguin">
      <div class="page container__vertical-align">
        <chart :chart-data="chartData" ref="chartRef"/>
        <div class="text-container">
          <h3>Des conséquences sur notre écosystème</h3>
          <p>
            La fonte des glaces est une conséquence du réchauffement climatique, elle augmente considérablement le niveau des océans et peut inonder de nombreux littoraux comme les grandes villes Amsterdam et New York.<br/>
            Cette problématique peut non seulement nuire à l’Homme mais aussi à son habitant le plus connu : l’ours polaire.
          </p>
          <h3>Nous sommes aussi vulnérable</h3>
          <p>
            Certaines glaces comme le permafrost renferment un éco système datant de plusieurs millions d’années dont potentiellement <strong><u>des virus</u></strong> qui n’existent plus à l’heure d’aujourd’hui et pourraient être libérés donc constituer une menace.
            <br>
            <br>
            En effet on assiste depuis quelques années à une forte diminution de la superficie des banquises dû à l’augmentation proportionnelle de la température moyenne à l’échelle mondiale.
          </p>
        </div>
        <div class="app-container__button">
          <styled-button :next-link="true" :to="{ name: 'JoinUs' }" />
        </div>
      </div>
    </loader>
  </app-container>
</template>

<script>
import chartData from '@/data/ice-melting/index';
import penguin from '@/assets/img/penguin.jpg';
import AppContainer from './app-container.vue';
import Chart from './chart.vue';
import Loader from './loader.vue';
import StyledButton from './styled-button.vue';

export default {
  components: {
    AppContainer,
    Chart,
    Loader,
    StyledButton,
  },
  setup() {
    return {
      chartData,
      penguin,
    };
  },
};
</script>
