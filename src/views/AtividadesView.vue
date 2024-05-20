<template>
  <div class="projeto-view">
    <h1 class="titulo">Atividades</h1>
    <div class="box">
      <!-- Botão para abrir o modal de adicionar tarefa -->
      <button @click="openModal" class="adicionar-tarefa">Adicionar Tarefa</button>
    </div>
    <!-- Adiciona o componente do modal -->
    <AtividadeModal
      :show="modalOpen"
      :atividades="atividades"
      :projetos="projetos"
      @novaAtividadeSalva="adicionarTarefa"
      @close="closeModal"
    />
    <div class="box">
      <!-- Loop para renderizar as linhas de acordo com os status -->
      <div v-for="status in statusList" :key="status" class="status-row">
        <h2 class="status-title">{{ status }}</h2>
        <div class="atividades-cards">
          <!-- Loop para renderizar os cartões de atividade para cada status -->
          <div
            v-for="atividade in atividadesFiltradas(status)"
            :key="atividade.id"
            class="atividade-card"
          >
            <p><strong>Nome:</strong> {{ atividade.nome }}</p>
            <p><strong>Nome do Projeto:</strong> {{ atividade.nomeProjeto }}</p>
            <p><strong>Descrição:</strong> {{ atividade.descricao }}</p>
            <p><strong>Data de Início:</strong> {{ atividade.dataInicio }}</p>
            <p><strong>Data de Fim:</strong> {{ atividade.dataFim }}</p>
            <!-- Botão para editar a tarefa -->
            <button @click="editarTarefa(atividade)" class="editar-tarefa">Editar Tarefa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AtividadeModal from '../components/AtividadeModal.vue'

export default {
  components: {
    AtividadeModal
  },
  data() {
    return {
      atividades: [],
      projetos: [], // Defina a lista de projetos conforme necessário
      statusList: ['Pendente', 'Revisada', 'Execução', 'Concluída'],
      modalOpen: false
    }
  },
  methods: {
    // Método para filtrar as atividades por status
    atividadesFiltradas(status) {
      return this.atividades.filter((atividade) => atividade.status === status)
    },
    // Método para adicionar nova tarefa para o status específico
    adicionarTarefa(novaTarefa) {
      // Adiciona a nova tarefa ao array de atividades
      this.atividades.push(novaTarefa)
      // Fecha o modal
      this.modalOpen = false
    },
    // Método para editar a tarefa
    editarTarefa(tarefa) {
      console.log('Editar tarefa:', tarefa)
    },
    // Método para abrir o modal de adicionar tarefa
    openModal() {
      this.modalOpen = true
    },
    // Método para fechar o modal
    closeModal() {
      this.modalOpen = false
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.titulo {
  color: #6e7177;
  font-weight: 700;
}
.status-row {
  margin-bottom: 20px;
}
.status-title {
  margin-bottom: 10px;
  color: #414042;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
}
.atividades-cards {
  display: flex;
  flex-wrap: wrap;
}
.atividade-card {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.adicionar-tarefa {
  margin-top: 10px;
  background-color: #50bbce;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}
.editar-tarefa {
  margin-top: 10px;
  background-color: #f45327;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
}
</style>
