<template>
  <div>
    <div class="task-detail">
      <h1>Nome da Task</h1>
      <div v-if="project">
        <!-- <p>ID: {{ project.id }}</p> -->
        <p class="tag-project">{{ project.nome }}</p>
        <p>Cliente: {{ project.clienteNome }}</p>
        <p>Status: {{ project.status }}</p>
        <button @click="showActivities">Ver Atividades</button>
      </div>

      <!-- Modal para mostrar detalhes das atividades -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h2>Atividades</h2>
          <ul>
            <li v-for="atividade in project.atividades" :key="atividade.id">
              {{ atividade.nome }} - {{ atividade.descricao }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ProjetoDetalheView',
  data() {
    return {
      project: null,
      showModal: false
    }
  },
  mounted() {
    // Aqui você deve carregar os dados do projeto usando o ID passado na rota
    const projectId = this.$route.params.id
    // Simulação de dados
    this.project = {
      id: projectId,
      nome: 'Projeto 1',
      clienteNome: 'Cliente Exemplo',
      status: 'Em Andamento',
      atividades: [
        { id: 1, nome: 'Atividade 1', descricao: 'Descrição da Atividade 1' },
        { id: 2, nome: 'Atividade 2', descricao: 'Descrição da Atividade 2' }
      ]
    }
  },
  methods: {
    showActivities() {
      this.showModal = true
    }
  }
})
</script>

<style scoped>
.tag-project {
  font-size: 12px;
  background-color: #f4f7fe;
  color: #414042;
  width: 70px;
  height: 25px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
}
.task-detail {
  background: white;
  width: 312px;
  padding: 20px;
  margin: 100px;
  border-radius: 10px;
  h1 {
    font-size: 18px;
    color: #414042;
    font-weight: 700;
  }
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
