<template>
  <div class="projeto-view">
    <h1 class="titulo">Projetos</h1>
    <div class="box">
      <div class="btnNovoProjeto" @click="toggleNovoProjeto">
        Novo projeto
        <button class="buttonOpenCollapse">+</button>
      </div>
      <div id="novoProjeto" :class="{ collapsed: !novoProjetoAberto }">
        <ProjetoForm @projetoAdicionado="atualizarProjetos" />
      </div>
      <ProjetosList :projetos="projetos" @projetoSelecionado="selecionarProjeto" />
    </div>
  </div>
</template>

<script>
import ProjetoForm from '../components/ProjetoForm.vue'
import ProjetosList from '../components/ProjetosList.vue'

export default {
  components: { ProjetoForm, ProjetosList },
  data() {
    return {
      projetos: [],
      novoProjetoAberto: false
    }
  },
  methods: {
    atualizarProjetos(projeto) {
      this.projetos.push(projeto)
    },
    selecionarProjeto(projeto) {
      this.$router.push(`/projetos/${projeto.id}`)
    },
    toggleNovoProjeto() {
      this.novoProjetoAberto = !this.novoProjetoAberto
    }
  }
}
</script>

<style scoped>
.projeto-view {
  margin-top: 150px;
  margin-left: 70px;
  width: 1200px;
}
.box {
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  margin-top: 30px;
}
.titulo {
  color: #6e7177;
  font-weight: 700;
}
.btnNovoProjeto {
  display: flex;
  align-items: center;
  font-weight: 500;
  justify-content: flex-end;
}
.buttonOpenCollapse {
  border-radius: 50%;
  background-color: #50bbce;
  border: none;
  width: 26px;
  height: 26px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  margin-left: 10px;
  line-height: 17px;
}
#novoProjeto {
  transition: height 0.3s ease-out;
  overflow: hidden;
}
#novoProjeto.collapsed {
  height: 0;
}
</style>
