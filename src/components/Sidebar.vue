<template>
  <div class="sidebar-wrap">
    <ul>
      <li v-for="route in routes">
        <router-link :to='route.path'>
          <div class="route" :class="route.path === $route.path ? 'current' : ''">
            {{route.name}}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {useRouter} from 'vue-router'
  import {ref} from 'vue'

  const routes = ref(useRouter().options.routes.filter(route => route.path !== '/:catchAll(.*)'))



</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .sidebar-wrap{
    ul {
      position: fixed;
      background: #fff;
      padding: 24px 28px;
      border-radius: 6px;
      box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
      li {
        list-style: none;
        margin-bottom: 24px;
        a{
          text-decoration: none;
        }
      }
    }
    .route {
      padding-left: 28px;
      position: relative;
      font-family: $ff;
      font-size: 14px;
      font-weight: 300;
      color: #222;
      text-decoration: none;
      transition: .2s all ease;
      &:before {
        content: '';
        position: absolute;
        height: 10px;
        width: 10px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 50%;
        border: .5px solid $blue;
      }
      &.current {
        &:before {
          background: $blue;
        }
        color: $blue;
      }
    }
  }


  #app {
    &.dark {
      .sidebar-wrap {
        ul {
          background: rgba(24, 24, 24, 0.6);
          backdrop-filter: blur(3px);
          box-shadow: none;
          .route {
            color: #fff;
            &.current {
              color: $cyan;
              &:before{
                background: $cyan;
              }
            }
            &:before{
              border-color: $cyan;
            }
          }
        }
      }
    }
  }
</style>
