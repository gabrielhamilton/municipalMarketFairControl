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
    <template>
      <a-layout id="components-layout-demo-side" style="min-height: 100vh">
        <Nav :toggleMenu="handleMenu" :toggle="toggleMenu" />
        <Menu :toggle="toggleMenu" />
        <a-layout v-bind:class="[toggleMenu ? '': 'full-size', 'content']">
          <a-layout-content style="margin: 15px 15px 0 15px; background: white">
            <div v-if="false"
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
            <div v-else >
              <svg :width="widMap" :height="heiMap" @click="getMousePos" id="map"
              style="float: left; margin: 10px 0 0 10px; border: solid black 1px">
                <polygon v-for="(cell, index) in cells"
                  :points="points(cell)"
                  :key="index"
                  @click="editCell(index)"
                  class="clicked"
                  :style="chocked(cells, cell) ? 'fill: red': 'fill: lime'"
                />
              </svg>
              <div class="createCell">
                <a-button type="primary" @click="createCell()">
                  <a-icon type="plus"></a-icon>
                </a-button>
              </div>
              <div v-if="modalEdit.edit"
                :title="'Editar celula ' + cells[key].id"
                :style={modalStyle}
                class="modalCell">
                <div class="group">
                  <div class="inputGroup">
                    <span>Eixo X: </span>
                    <a-inputNumber :min="0" :max="65" :step="0.1"
                      v-model="cells[key].pointX"
                    />
                  </div>
                  <div class="inputGroup">
                    <span>Eixo Y: </span>
                    <a-inputNumber :min="0" :max="25.1" :step="0.1"
                      v-model="cells[key].pointY"
                    />
                  </div>
                </div>
                <div class="group">
                  <div class="inputGroup">
                    <span>Largura: </span>
                    <a-inputNumber :min="1"
                      v-model="cells[key].width"
                    />
                  </div>
                  <div class="inputGroup">
                    <span>Altura: &nbsp;&nbsp; </span>
                    <a-inputNumber :min="1"
                      v-model="cells[key].height"
                    />
                  </div>
                </div>
                <div style="margin-top: 10px">
                  <a-button class="btn-modal" type="danger" @click="cancelEdit()">
                    cancelar
                  </a-button>
                  <a-button class="btn-modal" type="primary" @click="saveEdit()">
                    Salvar
                  </a-button>
                </div>
              </div>
            </div>
          </a-layout-content>
          <a-layout-footer>
            MarketFair ©2018 Created by Utfpr
          </a-layout-footer>
        </a-layout>
      </a-layout>
    </template>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue';
import Nav from '../components/Nav.vue';

export default {
  components: {
    Menu,
    Nav,
  },
  props: ['view', 'index'],
  data() {
    return {
      text: 'ola mundo!',
      collapsed: false,
      toggleMenu: true,
      heightContent: 'min-height: '.concat(window.innerHeight - 65).concat('px'),
      widMap: 700,
      heiMap: 300,
      key: false,
      newCell: false,
      modalEdit: {
        edit: false,
      },
      visible: false,
      cells: [
        {
          id: 1,
          pointX: 0,
          pointY: 0,
          width: 1,
          height: 1,
        },
        {
          id: 2,
          pointX: 1.1,
          pointY: 0,
          width: 1,
          height: 1,
        },
      ],
      scale: 40,
      cellEdit: null,
      modalStyle: null,
      pos: {
        x: 0,
        y: 0,
      },
    };
  },
  mouted() {
    /* Verifica se existe localStorage.`Token`,
       se exitir faz uma requisição para validar o token,
       caso for valido atualiza os dados e retorna a pagina,
       do contrário redireciona para a pagina de login
    */
    this.modalStyle = {
      position: 'absolute',
      'text-align': 'center',
      right: '15px',
      top: '70px',
      visibility: (this.visible ? 'inerit' : 'hidden'),
    };
    console.log(this.props.index);
  },
  methods: {
    handleMenu() {
      this.toggleMenu = !this.toggleMenu;
    },
    createCell() {
      this.newCell = true;
      console.log('criando celula');
    },
    points(cell) {
      const point1 = ''.concat(cell.pointX * this.scale).concat(',').concat(cell.pointY * this.scale).concat(' ');
      const point2 = ''.concat((cell.pointX + cell.width) * this.scale).concat(',').concat(cell.pointY * this.scale).concat(' ');
      const point3 = ''.concat((cell.pointX + cell.width) * this.scale).concat(',').concat((cell.pointY + cell.height) * this.scale).concat(' ');
      const point4 = ''.concat(cell.pointX * this.scale).concat(',').concat((cell.pointY + cell.height) * this.scale).concat(' ');
      return point1.concat(point2).concat(point3).concat(point4);
    },
    editCell(key) {
      this.cellEdit = JSON.parse(JSON.stringify(this.cells[key]));
      this.key = key;
      this.modalEdit = {
        edit: true,
      };
      this.visible = true;
    },
    cancelEdit() {
      this.cells[this.key] = JSON.parse(JSON.stringify(this.cellEdit));
      this.cellEdit = null;
      this.key = false;
      this.modalEdit = false;
      this.visible = false;
    },
    saveEdit() {
      this.key = null;
      this.cellEdit = null;
      this.modalEdit = false;
    },
    chocked(cells, cell) {
      const j = cells.length;
      for (let cel = cells[0], i = 0; i < j; i += 1, cel = cells[i]) {
        if (cel.id < cell.id) {
          if ((cell.pointX >= cel.pointX && cell.pointX <= (cel.pointX + cel.width))
          || ((cell.pointX + cell.width) >= cel.pointX
          && (cell.pointX + cell.width) <= (cel.pointX + cel.width))) {
            if ((cell.pointY >= cel.pointY && cell.pointY <= (cel.pointY + cel.height))
            || ((cell.pointY + cell.height) >= cel.pointY
            && (cell.pointY + cell.height) <= (cel.pointY + cel.height))) {
              return true;
            }
          }
        } else {
          break;
        }
      }
      return false;
    },
    getMousePos(evt) {
      const mouseX = evt.pageX - 281;
      const mouseY = evt.pageY - 90;
      this.pos = {
        x: mouseX,
        y: mouseY,
      };
      if (this.newCell === true) {
        const cel = {
          id: this.cells[this.cells.length - 1].id + 1,
          pointX: this.pos.x / this.scale,
          pointY: this.pos.y / this.scale,
          width: 1,
          height: 1,
        };
        console.log('nova celula');
        this.cells[this.cells.length] = JSON.parse(JSON.stringify(cel));
        this.newCell = false;
      }
    },
  },
};
</script>

<style scoped>
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
    background: gray;
    padding: 30px 10px;
    align-self: center;
  }
  #components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0);
  margin: 16px;
  }
  .clicked {
    cursor: pointer;
  }
  .inputGroup {
    padding: 5px;
  }
  .group {
    display: inline-block;
  }
  .modalCell {
    text-align: center;
    max-width: 400px;
    max-height: 200px;
    top: 70px;
    float: right;
    margin: 20px;
    padding: 20px;
    border: solid gray 1px;
    border-radius: 5px;
  }
  .btn-modal {
    margin: 0 10px;
    right: 0;
  }
</style>
