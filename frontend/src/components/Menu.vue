<template>
  <div class="Menu">
    <a-menu :defaultSelectedKeys="index" mode="inline" theme="light"
      :inlineCollapsed="!toggle" class="menu">
      <a-menu-item key="1" :class="toggle? '': 'item'">
        <router-link :to="{name: 'home'}">
          <a-icon type="home" />
          <span>Home</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2" :class="toggle? '': 'item'">
        <a-icon type="line-chart" />
        <span>Faturamento</span>
      </a-menu-item>
      <a-menu-item key="3" :class="toggle? '': 'item'">
        <a-icon type="inbox" />
        <span>Option 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" />
          <span>Feira</span>
        </span>
        <a-menu-item key="5">
          <router-link :to="{name: 'AjustaLayout'}">
            <span>Ajustar Layout</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
        <a-menu-item key="7">Option 7</a-menu-item>
        <a-menu-item key="8">Option 8</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <router-link to="/about">
          <a-icon type="info-circle" />
          <span>About</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: ['toggle', 'index'],
  mounted() {
    console.log(this.index);
  },
};
</script>
<style scoped>
  .Menu {
    position: fixed;
    width: 256px;
    top: 65px;
    bottom: 0px;
    left: 0px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  ul.menu {
    height: 100%;
  }
</style>
<style>
  ::-webkit-scrollbar {
    width: 4px;
  }
  /* scroll css */
  ::-webkit-scrollbar-track {
    background: #d6d6d6;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(173, 163, 163);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(128, 123, 123);
  }
</style>
