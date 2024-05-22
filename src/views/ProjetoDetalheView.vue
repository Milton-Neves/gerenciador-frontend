<template>
  <div class="task-detail">
    <h3 v-if="project">{{ project.status }}</h3>

    <div class="card-detail" v-if="project">
      <button class="edit-button" @click="editProject">
        <img src="../assets/edit-icon.svg" />
      </button>
      <h1>Nome da Task</h1>
      <!-- <p>ID: {{ project.id }}</p> -->
      <p class="tag-project">{{ project.nome }}</p>
      <p class="description">{{ project.projetctDescription }}</p>
      <div class="date-task">
        <div class="align">
          <img src="../assets/icon-calendar.svg" />
          <p>Data de Início: {{ project.dataInicio }}</p>
        </div>
        <div class="align">
          <img src="../assets/icon-date-finished.svg" />
          <p>
            Data de Conclusão:
            {{ project.dataConclusao }}
          </p>
        </div>
      </div>

      <!-- <button @click="showActivities">Ver Atividades</button>  -->
    </div>
  </div>

  <!-- Modal para mostrar detalhes das atividades -->
  <!-- <div v-if="showModal" class="modal">
    <div class="modal-content">
      <span class="close" @click="showModal = false">&times;</span>
      <h2>Atividades</h2>
      <ul>
        <li v-for="atividade in project.atividades" :key="atividade.id">
          {{ atividade.nome }} - {{ atividade.descricao }}
        </li>
      </ul>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Project {
  id: string
  nome: string
  projetctDescription: string
  status: string
  dataInicio: string
  dataConclusao: string
  atividades: { id: number; nome: string; descricao: string }[]
}

export default defineComponent({
  name: 'ProjetoDetalheView',
  data() {
    return {
      project: null as Project | null,
      showModal: false
    }
  },
  mounted() {
    let projectId = this.$route.params.id as string | string[]
    if (Array.isArray(projectId)) {
      projectId = projectId[0]
    }
    this.project = {
      id: projectId,
      nome: 'Projeto 1',
      projetctDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'Em Andamento',
      dataInicio: '2023-01-01',
      dataConclusao: '2023-12-31',
      atividades: [
        { id: 1, nome: 'Atividade 1', descricao: 'Descrição da Atividade 1' },
        { id: 2, nome: 'Atividade 2', descricao: 'Descrição da Atividade 2' }
      ]
    }
  },
  methods: {
    showActivities() {
      this.showModal = true
    },
    editProject() {
      console.log('Edit project clicked')
    }
  }
})
</script>

<style scoped>
img {
  width: 20px;
  position: absolute;
  margin-left: 240px;
}
.date-task {
  background-color: #f4f7fe;
  width: 174px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  .align {
    display: flex;
    align-items: center;
    p {
      font-size: 10px;
      margin: 5px;
      margin-left: 20px;
    }
    img {
      margin: 0;
      width: 15px;
    }
  }
}
button,
.edit-button {
  background: none;
  border: none;
}
.card-detail {
  background-color: #fff;
  width: 312px;
  padding: 20px;
  border-radius: 10px;
  .description {
    font-size: 14px;
  }
}
h3 {
  font-size: 17px;
  font-weight: 700;
  color: #414042;
  text-transform: uppercase;
  background-color: #fff;
  width: 312px;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
}
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
  margin: 150px 100px;
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
