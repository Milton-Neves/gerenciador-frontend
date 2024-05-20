<template>
  <div class="projeto-view">
    <h1 class="titulo">Projetos</h1>
    <div class="box">
      <div class="btnNovoProjeto" @click="toggleNovoProjeto">
        Novo projeto
        <button class="buttonOpenCollapse">+</button>
      </div>
      <ProjetosList :projetos="projetos" @projetoSelecionado="selecionarProjeto" />
    </div>
    <ProjetoForm ref="projetoForm" @projetoAdicionado="atualizarProjetos" />
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
      this.$refs.projetoForm.openModal()
    }
  }
}
</script>

<style scoped>
.projeto-view {
  margin-top: 150px;
  margin-left: 70px;
  margin-right: 70px;
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
</style>
