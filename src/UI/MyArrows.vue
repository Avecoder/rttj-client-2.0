<template>
  <div class="arrows">
    <a href="#" class="arrow" @click.prevent="clickArrow" data-arrow="prev">
      <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.93543 1.07495L1.50684 8.65925L8.93543 16.2436" stroke="#7518F8"/>
      </svg>
    </a>
    <a href="#" class="arrow" @click.prevent="clickArrow"  data-arrow="next">
      <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.641716 1.07495L8.07031 8.65925L0.641716 16.2436" stroke="#7518F8"/>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: 'my-arrows',
  methods: {
    clickArrow(e) {
      this.$emit('arrowClick', e.target.dataset.arrow)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';


  .arrows {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    a{
      background: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 8px rgba(209, 253, 250, 0.35);
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -ms-align-items: center;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      margin-left: 10px;
      svg {
        pointer-events: none;
      }
      &:active {
        opacity: .9;
        box-shadow: 0px 0px 4px rgba(209, 253, 250, 0.45);
      }
    }
  }

  #app {
    &.dark {
      .arrows {
        a {
          background: $darkElementLight;
          box-shadow: none;
          svg {
            path {
              stroke: $cyan;
            }
          }
        }
      }
    }
  }
</style>
