<template>
  <v-date-picker v-model="date" :attributes="attributes" :min-date="new Date()" @dayclick="takeDate">
    <template #default="{ inputValue, inputEvents }">
      <input :value="inputValue" v-on="inputEvents"  class="global-input">
    </template>
  </v-date-picker>

</template>

<script>
export default {
  name: 'my-calendar'
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  @import '../styles/v-calendar.scss';

  .vc-day-content[tabindex="0"]{
    background: #7518F8;
    box-shadow: 0px 0px 4px rgba(134, 118, 254, 0.3);
    border-radius: 15px;
    color: #fff !important;
    font-weight: 400 !important;
  }


  .vc-pane{
    font-family: 'Raleway', sans-serif;
    font-weight: 300 !important;
    /* padding-top: 30px; */
  }


  .vc-title{
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #7518F8;
    margin-bottom: 10px;
  }

  .vc-weeks{
    .vc-weekday{
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
  }

  .vc-arrow{
    background: #fff;
    box-shadow: 0px 0px 7px #F0F3FF;
    border-radius: 4px;
    svg{
      path{
        color: $blue;
      }
    }
  }

  .vc-container{
    padding: 16px 12px 0;
  }

  .vc-dots{
    .vc-dot{
      background-color: $blue !important;
    }
  }

  .vc-highlight{
    background: $blue !important;
  }
</style>
