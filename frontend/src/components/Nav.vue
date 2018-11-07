<template>
  <div class="nav">
    <div style="float: left">
      <a-button v-if="toggleMenu" @click="toggleMenu" class="btn-menu">
        <a-icon :type="toggle ? 'menu-fold' : 'menu-unfold'" />
      </a-button>
    </div>

    <div style="float:right; margin-right: 20px">
      <a-dropdown>
        <a-button class="ant-dropdown-link">
          perfil <a-icon type="user" />
        </a-button>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="#">Configurações</a>
          </a-menu-item>
          <a-menu-item v-if="isLoged">
            <a href="/login">Login</a>
          </a-menu-item>
          <a-menu-item
            @click="showModal"
          >
            <span>Logout</span>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <a-modal title="Logout" :visible="ModalLogout" @ok="logout">
        <h3>Deseja continuar?</h3>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    toggleMenu: Function,
    toggle: Boolean,
  },
  data() {
    return {
      ModalLogout: false,
      isLoged: false,
    };
  },
  methods: {
    showModal() {
      this.ModalLogout = true;
    },
    logout() {
      /* Destroi o token do navegador do usuário */
      localStorage.removeItem('user');
      /* Confirmar o nome do Token
      router.push('home'); Redireciona para login
      window.location = 'home'; */
      this.ModalLogout = false;
      console.log(this);
      this.$router.push('login');
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  padding: 20px 10px 10px 17px!important;
  height: 65px!important;
  z-index: 10;
  width: 100%!important;
  border-bottom: solid rgba(207, 205, 205, 0.8) 1px!important;
  background: rgb(255, 255, 255);
}
.btn-menu {
  border: none;
}
</style>
