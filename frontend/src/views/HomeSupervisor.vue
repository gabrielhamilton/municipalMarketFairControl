<template>
  <div v-if="false">
    <Nav :toggleMenu="handleMenu" :toggle="toggleMenu" />
    <div>
      <Menu :toggle="toggleMenu" :index="index" />
      <div id="content" :class="toggleMenu ? 'min-size': 'full-size'" :style="heightContent">
        <div class="conteudo">
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
          <h1>Bem Vindo!</h1>
        </div>
        <div class="footer">
          Created By MarketFair
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="true"
    style="vertical-align: middle">
      <a-row type="flex" justify="center">
        <a-col :span="6">
          <div style="margin: 10px 0">
            <a-button>Criar Feira!</a-button>
          </div>
          <div style="text-align: left">
            <a-collapse :v-model="[1]">
              <a-collapse-panel header="Aviso 1" key="1">
                <p>{{text}}</p>
              </a-collapse-panel>
              <a-collapse-panel header="Aviso 2" key="2" :disabled='false'>
                <p>{{text}}</p>
              </a-collapse-panel>
            </a-collapse>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 'ola mundo!',
    };
  },
  mouted() {
    /* Verifica se existe localStorage.`Token`,
       se exitir faz uma requisição para validar o token,
       caso for valido atualiza os dados e retorna a pagina,
       do contrário redireciona para a pagina de login
    */
    console.log(this.props.index);
  },
};
</script>
<style scoped>

</style>
