<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'my-card'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .card {
    padding: 16px 28px;
    background: #FFFFFF;
    box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
    border-radius: 12px;
  }

  #app {
    &.dark {
      .card {
        background: rgba(24, 24, 24, 0.6);
        backdrop-filter: blur(3px);
        color: #fff;
      }
    }
  }
</style>
