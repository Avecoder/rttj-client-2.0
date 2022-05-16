<template>
  <p>Период: c <span>{{dates.firstDate}}</span> по <span>{{dates.secondDate}}</span></p>
</template>

<script>
export default {
  name: 'my-date-period',
  props: ['dates']
}
</script>

<style lang="scss" scoped>
  @import  '../styles/variables.scss';
  p{
    font-weight: 400;
    font-size: 14px;
    span {
      color: $blue;
    }
  }

</style>
