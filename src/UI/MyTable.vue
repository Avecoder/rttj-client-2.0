<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <th v-for="label in table.labels">{{label}}</th>
          <th v-if="table.lastElement"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in table.data">
          <td v-for="item in row" :class="{completed: item === 'Да', notCompleted: item === 'Нет'}">{{item}}</td>
          <td v-if="table.lastElement" class="last-row">
            <a href="#" @click.prevent="enterLastElement(table.lastElement.data)">{{table.lastElement.value}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'my-table',
  props: {table: [Object]},
  methods: {
    enterLastElement(data) {
      this.$emit('tableClick', data)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';


  .table{
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
    box-sizing: border-box;
    width: auto;
    height: auto;
    padding: 33px 40px;
    margin-bottom: 56px;
    table{
      width: 100%;
      font-family: $ff;
      thead{
        margin-bottom: 24px;
        tr{
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          th{
            text-align: center;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            flex: 1;
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: center;
            padding-bottom: 24px;
          }
        }
      }
      tbody{
        tr{
          display: -webkit-flex;
          display: -ms-flex;
          display: flex;
          td{
            text-align: center;
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            padding: 8px 20px;
            border: none;
            display: flex;
            flex: 1;
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: center;
            &.completed {
              color: $blue;
            }
            &.notCompleted {
              color: $red;
            }
          }
          &:nth-child(2n+1){
            background: $grey;
            border-radius: 4px;
          }
        }
      }
    }
  }

  .last-row {
    a {
      color: $blue;
      text-decoration: none;
    }
  }
  #app{
    &.dark{
      .last-row{
        a{
          color: $cyan;
        }
      }
      .table {
        background: rgba(24, 24, 24, 0.6);
        backdrop-filter: blur(3px);
        color: #fff;
        box-shadow: none;
        tbody {
          tr {
            &:nth-child(2n+1){
              background: $darkElementLight;
            }
            td {
              &.completed {
                color: $cyan;
              }
            }
          }
        }
      }
    }
  }
</style>
