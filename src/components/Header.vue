<template>
  <header>
    <div class="container aic jcb">
      <router-link class="logo" to="/">RoadToTheJunior</router-link>
      <div class="d-flex aic">
        <my-button-image @click="enterChangeTheme">
          <img :src="theme.mode === 'light' ? '../src/assets/darkMode.svg' : '../src/assets/lightMode.svg'" alt="">
        </my-button-image>
        <div class="avatar-wrap">
          <div class="avatar">
            <router-link to="/profile" v-if="userData.userAvatar">
              <img :src="userData.userAvatar" alt="">
            </router-link>
            <div class="cap" v-else></div>
          </div>
          <div class="username">{{userData.username}}</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import {ref, reactive, onMounted, computed, watch} from 'vue'

  import {useStore} from 'vuex'

  const store = useStore()

  import {changeTheme, getTheme} from '../hooks/useTheme'

  const theme = reactive({mode: getTheme()})

  const userData = reactive(store.state.user)

  const enterChangeTheme = () => {
    changeTheme()
    theme.mode = getTheme()
    store.commit('user/setTheme', theme.mode)
  }



</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  header {
    width: auto;
    background: #fff;
    color: #222;
    padding: 12px 0;
    box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
    position: fixed;
    width: 100%;
    z-index: 10;
    .logo {
      text-decoration: none;
      color: #222;
    }
    .avatar {
      margin-left: 76px;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: center;
      -ms-align-items: center;
      align-items: center;
      &-wrap{
        position: relative;
        .username{
          position: absolute;
          bottom: 0;
          right: 20%;
          background: cyan;
          color: #000;
          font-family: $ff;
          padding: 0 12px;
          line-height: 13px;
          border-radius: 12px;
          font-size: 13px;
          text-transform: uppercase;
        }
      }

      a {
        img {
          width: 110%;
          height: 110%;
        }
      }
      .cap {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background: rgba(209, 253, 250, 0.25);
      }
    }
  }

  #app{
    &.dark {
      header {
        box-shadow: none;
        background: rgba(24, 24, 24, 0.6);
        backdrop-filter: blur(3px);
        a.logo{
          color: #fff;
        }
      }
    }
  }

</style>
