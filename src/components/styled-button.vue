<template>
  <router-link v-if="isRouterLink" class="router-link" :to="to">
    <button class="button">
      <slot
        v-if="$slots.default"
        name="default"
      />
      <template v-else>Suivant</template>
      <svg
        v-if="nextLink"
        class="button__next-arrow"
        width="16px"
        height="10px"
        viewBox="0 0 16 10"
      >
        <g id="00.-Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g class="button--fill-color" transform="translate(-277.000000, -488.000000)" fill-rule="nonzero">
            <g id="Padding-Group-2" transform="translate(64.000000, 464.000000)">
              <g id="top-arrow-from-top" transform="translate(221.000000, 29.000000) rotate(90.000000) translate(-221.000000, -29.000000) translate(215.000000, 21.000000)">
                <path d="M2.71,5.71 L5,3.41 L5,15 C5,15.5522847 5.44771525,16 6,16 C6.55228475,16 7,15.5522847 7,15 L7,3.41 L9.29,5.71 C9.4777666,5.89931265 9.73336246,6.00579832 10,6.00579832 C10.2666375,6.00579832 10.5222334,5.89931265 10.71,5.71 C10.8993127,5.5222334 11.0057983,5.26663754 11.0057983,5 C11.0057983,4.73336246 10.8993127,4.4777666 10.71,4.29 L6.71,0.29 C6.61489629,0.198959371 6.50275132,0.127594388 6.38,0.08 C6.13653864,-0.0200180181 5.86346136,-0.0200180181 5.62,0.08 C5.49724868,0.127594388 5.38510371,0.198959371 5.29,0.29 L1.29,4.29 C1.03634142,4.54365857 0.937276472,4.91337399 1.03012195,5.25987804 C1.12296743,5.6063821 1.3936179,5.87703257 1.74012196,5.96987805 C2.08662601,6.06272353 2.45634143,5.96365858 2.71,5.71 Z" id="Path">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
  </router-link>
  <button v-else class="button" :class="{'button--initial-case': initialCase}">
      <slot
        v-if="$slots.default"
        name="default"
      />
      <template v-else>Suivant</template>
      <svg
        v-if="nextLink"
        class="button__next-arrow"
        width="16px"
        height="10px"
        viewBox="0 0 16 10"
      >
        <g id="00.-Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g class="button--fill-color" transform="translate(-277.000000, -488.000000)" fill-rule="nonzero">
            <g id="Padding-Group-2" transform="translate(64.000000, 464.000000)">
              <g id="top-arrow-from-top" transform="translate(221.000000, 29.000000) rotate(90.000000) translate(-221.000000, -29.000000) translate(215.000000, 21.000000)">
                <path d="M2.71,5.71 L5,3.41 L5,15 C5,15.5522847 5.44771525,16 6,16 C6.55228475,16 7,15.5522847 7,15 L7,3.41 L9.29,5.71 C9.4777666,5.89931265 9.73336246,6.00579832 10,6.00579832 C10.2666375,6.00579832 10.5222334,5.89931265 10.71,5.71 C10.8993127,5.5222334 11.0057983,5.26663754 11.0057983,5 C11.0057983,4.73336246 10.8993127,4.4777666 10.71,4.29 L6.71,0.29 C6.61489629,0.198959371 6.50275132,0.127594388 6.38,0.08 C6.13653864,-0.0200180181 5.86346136,-0.0200180181 5.62,0.08 C5.49724868,0.127594388 5.38510371,0.198959371 5.29,0.29 L1.29,4.29 C1.03634142,4.54365857 0.937276472,4.91337399 1.03012195,5.25987804 C1.12296743,5.6063821 1.3936179,5.87703257 1.74012196,5.96987805 C2.08662601,6.06272353 2.45634143,5.96365858 2.71,5.71 Z" id="Path">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </button>
</template>

<script>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

export default {
  setup(props) {
    const isRouterLink = computed(() => !!props.to);
    return {
      isRouterLink,
    };
  },
  props: {
    nextLink: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      required: false,
    },
    initialCase: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    RouterLink,
  },
};
</script>

<style lang="scss">
.router-link {
  text-decoration: none;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px 12px 24px;

  background-color: transparent;
  border: solid 2px $primary;
  border-radius: 3px;

  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  color: $primary;

  cursor: pointer;

  &--fill-color {
    fill: $primary;
  }

  &--initial-case {
    text-transform: initial;
  }

  &__next-arrow {
    margin-left: 8px;
  }
}
</style>
