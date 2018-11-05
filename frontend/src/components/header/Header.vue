<template>
  <a-layout id="components-layout-demo-responsive">
    
    <a-layout-sider
    class="menuLateral"
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu class="menuLateral" theme="dark" mode="inline" :defaultSelectedKeys="['4']">

        <a-menu-item v-for="item in menuItems" :key="item.id" class = "caixa_menu">
          <a-icon :type="item.icon" />
          <span class="nav-text">{{ item.text }}</span>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ background: '#fff'}">
      <a-layout-header class="teste" :style="{ background: '#00ccff', padding: 0 }">
          <span class="titulo">Feira Municipal Criativa</span>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#f4f4f4', minHeight: '360px' }">
          content
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>

  </a-layout>
</template>

<script>
export default {
  data(){
    return{
      mobile: false,
      menuItems: [
        {
          id: 1,
          icon: 'user',
          text: 'Feirante',
        },
        {
          id: 2,
          icon: 'shop',
          text: 'Feira',
        },
        {
          id: 3,
          icon: 'solution',
          text: "Mapa"
        }
      ], 
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
      if(collapsed === true){
        this.mobile = true;
      }
      else{
        this.mobile = false;
      }
    },
    onBreakpoint(broken) {
      console.log('quebrou');
    }
  }
}
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.teste{
  font-size: 30px;
  text-align: center;
  font-family: Bradley Hand, cursive;
  border-bottom: black;
  border-style: none none solid none;
}
.menuLateral{
  background-color: rgb(43, 158, 224);
}
.azul{
  background-color: #d8d8d8;
}

.titulo{
  color: rgb(0, 0, 0);
  overflow: hidden;
  white-space: nowrap;
}
.caixa_menu{
  border: rgb(172, 167, 175) solid;
}
a{
  text-decoration: none;
}
</style>
