<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo" >
        <!-- Para alterar a imagem de logo, altere o caminho da variavel src.-->
        <img class="imagem_logo" src="./image/login2.jpg" alt="Feira Criativa"> 
      </div>

      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1" on-click="title = 'user'">

          <a-icon type="user" />
          <span>user</span>

        </a-menu-item>
        <a-menu-item key="2" on-click="title = 'cam'">

          <a-icon type="video-camera" />
          <span>cam</span>

        </a-menu-item>
        <a-menu-item key="3" on-click="title = 'upload'">

          <a-icon type="upload" />
          <span>upload</span>

        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        {{ title }}
      
      
      </a-layout-header>

    </a-layout>
  </a-layout>
</template>
<script>

export default {
  data(){
    return {
      title: "user",
      collapsed: false,
    }
  },
  methods: {
    change_title : (nome) => {
      title: nome
    }
  }
}

</script>
<style>
.imagem_logo {
    width: 100%;
    height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
</style>