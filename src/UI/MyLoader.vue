<template>
  <div class="loader">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
      <span style="--i: 11"></span>
      <span style="--i: 12"></span>
      <span style="--i: 13"></span>
      <span style="--i: 14"></span>
      <span style="--i: 15"></span>
      <span style="--i: 16"></span>
      <span style="--i: 17"></span>
      <span style="--i: 18"></span>
      <span style="--i: 19"></span>
      <span style="--i: 20"></span>
    </div>
</template>

<script>
export default {
  name: 'my-loader'
}
</script>

<style lang="scss" scoped>
  $size: 7px;
  $dimension: 90px;


  #app {
    &.dark {
      .loader {
        --spiner-color: #01F1E3;
      }
    }
  }

  .loader {
    --spiner-color: #8676FE;
    position: relative;
    width: $dimension;
    height: $dimension;
    margin: 0 calc($size / -2);
  }


  .loader span {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    // /* background: var(var(--spiner-color)); */
    transform: rotate(calc(360deg / 20 * var(--i)));
  }

  .loader span::before {
    content: '';
    position: absolute;
    right: 0;
    background: var(--spiner-color);
    width: $size;
    height: $size;
    border-radius: 50%;
    top: calc(50% - calc($size / 2));

    transform: scale(.2);
    animation: spin 1s linear infinite;
    animation-delay: calc(0.05s * var(--i));
  }

  @keyframes spin {
    0% {
      transform: scale(1)
    }

    100% {
      transform: scale(.1)
    }
  }
</style>
