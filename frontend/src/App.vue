<template>
  <a-layout>
    <Nav :toggleMenu="handleMenu" :toggle="toggleMenu" />
    <Menu :toggle="toggleMenu" />
    <a-layout v-bind:class="[toggleMenu ? '': 'full-size', 'content']">
      <a-layout-content style="margin: 15px 15px 0 15px; background: white">
        <router-view :menuToogle="toggleMenu"/>
      </a-layout-content>
      <a-layout-footer class="footer">
        MarketFair ©2018 Created by Utfpr
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Menu from './components/Menu.vue';
import Nav from './components/Nav.vue';

export default {
  components: {
    Menu,
    Nav,
  },
  data() {
    return {
      toggleMenu: false,
      heightContent: 'min-height: '.concat(window.innerHeight - 65).concat('px'),
    };
  },
  methods: {
    handleMenu() {
      this.toggleMenu = !this.toggleMenu;
    },
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .content {
    position: absolute;
    width: calc( 100% - 256px );
    min-height: calc( 100% - 65px);
    transition: width 0.2s;
    top: 65px;
    right: 0px;
  }
  .content.full-size {
    width: calc( 100% - 80px );
  }
  .content > .conteudo {
    margin: 0 15px;
  }
  .content > .footer {
    position: relative;
    bottom: 0!important;
    padding: 30px 10px;
    align-self: center;
  }
</style>
