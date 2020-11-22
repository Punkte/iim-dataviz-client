<template>
  <div class="container">
    <slot name="default" />
  </div>
</template>

<style lang="scss">
.container {
  position: relative;
  margin: 0 auto;
  max-width: 1280px;
  min-height: 100vh;

  &__vertical-align {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    flex-direction: column;
    /* min-height */
  }

  .text-container {
    max-width: 980px;
    margin: 16px auto;
    margin-bottom: 32px;
  }

  @include xl {
    padding: 0 16px;
  }

  .app-container__button {
    position: absolute;
    bottom: 16px;
    right: 0;

    @include md {
      position: initial;
      right: 0;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 32px;
    }

    @include xl {
      right: 16px;
    }
  }
}
</style>
