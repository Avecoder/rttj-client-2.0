<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button-image'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  button {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    background: #fff;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 8px rgba(209, 253, 250, 0.25);
    &:active {
      opacity: .9;
      box-shadow: 0px 0px 4px #F0F3FF;
    }
  }

  #app{
    &.dark {
      button {
        box-shadow: none;
        background: $darkElementLight;
      }
    }
  }
</style>
