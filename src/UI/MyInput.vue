<template>
  <input type="text" :value="modelValue" @input="updateInput" :placeholder="placeholder">
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number],
      placeholder: [String, Number]
    },
    methods: {
      updateInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>



<style lang="scss" scoped>
  input {
    background: #F0F3FF;
    font-family: 'Raleway';
    border-radius: 4px;
    border: none;
    outline: none;
    max-height: 30px;
    box-sizing: border-box;
    padding: 0 14px;
    font-weight: 300;
    font-size: 14px;
    &::placeholder{
      color: #CCC6FF;
      font-weight: 300;
    }
  }
</style>
