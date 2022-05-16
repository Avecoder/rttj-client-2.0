<template>
  <div class="checkbox-wrap">
    <span>{{options[0]}}</span>
    <label>
      <input type="checkbox" class="checkbox-input" @input="changeCheckbox" :checked="checked"/>
      <div class="checkbox-div"></div>
    </label>
    <span>{{options[1]}}</span>
  </div>

</template>

<script>
export default {
  name: 'my-select',
  props: ['options', 'checked'],
  methods: {
    changeCheckbox(e) {
      this.$emit('changeCheckbox', e.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  $width: 42px;
  $height: 18px;
  $buttonSize: 24px;

  .checkbox {
    &-input {
      display: none;
      &:checked ~ .checkbox-div{
        &:before {
          transform: translate(calc($width - 18px), -50%);
        }
      }
    }

    &-div{
      width: $width;
      height: $height;
      border-radius: $width;
      background: rgba(209, 253, 250, 0.25);
      position: relative;
      cursor: pointer;
      margin: 0 20px;
      &:before {
        width: $buttonSize;
        height: $buttonSize;
        border-radius: 50%;
        position: absolute;
        content: '';
        left: 0;
        top: 50%;
        transition: .3s all ease;
        background: #BFFBF8;
        transform: translate(-4px, -50%);
      }
    }

    &-wrap {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      span {
        color: #222;
        font-size: 14px;
      }
    }
  }

  #app {
    &.dark {
      .checkbox-wrap {
        span{
          color: #fff;
        }
      }
    }
  }



</style>
