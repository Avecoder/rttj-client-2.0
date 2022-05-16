<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  button {
    border: 0.5px solid $blue;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    font-family: $ff;
    font-size: 14px;
    text-transform: uppercase;
    transition: .2s all ease;
    color: $blue;
    max-height: 16px;
    padding: 0 20px;
    font-weight: 400;
    cursor: pointer;
    a{
      text-decoration: none;
      color: $blue;
    }
    &:hover {
      background: $blue;
      color: #fff;
    }
  }

  #app{
    &.dark {
      button {
        color: $cyan;
        border: 0.5px solid $cyan;
        a{
          text-decoration: none;
          color: $cyan;
        }
        &:hover {
          background: $cyan;
          color: #000;
        }
      }
    }
  }
</style>
