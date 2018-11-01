<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider
    class="verde"
      breakpoint="lg"
      collapsedWidth="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <a-menu class="verde" theme="dark" mode="inline" :defaultSelectedKeys="['4']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span class="nav-text">Feirantes</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span class="nav-text">Feira</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span class="nav-text">Entrar</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span class="nav-text">nav 4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ background: '#fff'}">
      <a-layout-header class="teste" :style="{ background: 'rgb(214, 234, 226)', padding: 0 }">
          <ul class="nav">
            <li ><a href="#home" class="active">Feira Municipal Criativa</a></li>
            <li class="login"><a href="#news" v-bind:class="{ esconde: mobile }">ENTRAR</a></li>
</ul>
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
      mobile: false
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
.verde{
  background-color: rgb(3, 37, 19);
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

</style>