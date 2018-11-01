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
      <a-layout-header class="teste" :style="{ background: 'rgb(214, 234, 226)', padding: 0 }">
          <ul class="nav">
            <li ><a href="#home" class="active"><span class="titulo">Feira Municipal Criativa</span></a></li>
            <li class="login"><a href="#news" v-bind:class="{ esconde: mobile }">ENTRAR</a></li>
          </ul>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#000', minHeight: '360px' }">
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
          icon: 'video-camera',
          text: 'Feira',
        },
        {
          id: 3,
          icon: 'upload',
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
  background-color: rgb(150,100,100);
}
.azul{
  background-color: #00ccff;
}
.nav li{
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.login{
  float: right;
  margin-right: 15px;
  font-size: 15px;
  display: hidden;
}
.esconde{
  display: none;
}
.titulo{
  text-color: #000;
}
.caixa_menu{
  border: white dashed;
}
a{
  text-decoration: none;
}
</style>
