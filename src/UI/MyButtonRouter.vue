<template>
  <router-link :to="path">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'my-button-router',
  props: ['path']
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  a {
    border: 0.5px solid $blue;
    box-sizing: border-box;
    border-radius: 8px;
    background: transparent;
    font-family: $ff;
    font-size: 13px;
    text-transform: uppercase;
    transition: .2s all ease;
    color: $blue;
    max-height: 16px;
    padding: 0 20px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    margin-right: 20px;
    &:hover {
      background: $blue;
      color: #fff;
    }
  }

  #app{
    &.dark {
      a {
        color: $cyan;
        border: 0.5px solid $cyan;
        &:hover {
          background: $cyan;
          color: #000;
        }
      }
    }
  }
</style>
