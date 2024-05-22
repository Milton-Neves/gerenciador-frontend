<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <div class="close">
        <h2>Nova Atividade</h2>
        <span class="close" @click="$emit('close')">&times;</span>
      </div>
      <form @submit.prevent="salvarAtividade">
        <div class="teste">
          <div class="form-group">
            <label for="dataInicio">Data de Início:</label>
            <input type="date" id="dataInicio" v-model="novaAtividade.dataInicio" required />
          </div>
          <div class="form-group">
            <label for="dataFim">Data de Conclusão:</label>
            <input type="date" id="dataFim" v-model="novaAtividade.dataFim" required />
          </div>
        </div>
        <div class="teste">
          <div class="form-group">
            <label for="status">Status:</label>
            <select id="status" v-model="novaAtividade.status" required>
              <option value="">Informe o status</option>
              <option value="Pendente">Pendente</option>
              <option value="Revisada">Revisada</option>
              <option value="Execução">Execução</option>
              <option value="Concluída">Concluída</option>
            </select>
          </div>
          <!-- <div class="form-group">
            <label for="projeto">Projeto:</label>
            <select id="projeto" v-model="novaAtividade.nomeProjeto" required>
              <option value="">Selecione um projeto</option>
              <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.nome">
                {{ projeto.nome }}
              </option>
            </select>
          </div> -->
          <div class="form-group">
            <label for="nomeProjeto">Selecionar Projeto</label>
            <div class="select-wrapper">
              <select class="form-control" v-model="nomeProjeto">
                <option>Projeto 1</option>
                <option>Projeto 2</option>
                <option>Projeto 3</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <label for="descricao">Descrição:</label>
          <textarea id="descricao" v-model="novaAtividade.descricao" required></textarea>
        </div>
        <div class="form-group buttons">
          <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
          <button type="submit" class="btn-salvar">Salvar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'AtividadeModal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    // atividades: {
    //   type: Array as PropType<Array<{ id: number; nome: string; descricao: string }>>,
    //   required: true
    // },
    projetos: {
      type: Array as PropType<Array<{ id: number; nome: string }>>
    }
  },
  data() {
    return {
      novaAtividade: {
        nome: '',
        descricao: '',
        nomeProjeto: '',
        // nomeProjeto: this.projeto?.nomeProjeto || 'Projeto 1',
        status: '',
        dataInicio: '',
        dataFim: ''
      }
    }
  },
  methods: {
    salvarAtividade() {
      this.$emit('novaAtividade', { ...this.novaAtividade })
      this.$emit('close')
      this.novaAtividade = {
        descricao: '',
        nomeProjeto: '',
        status: '',
        dataInicio: '',
        dataFim: ''
      }
    }
  }
})
</script>

<style scoped>
.close {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.teste {
  display: flex;
  gap: 2rem;
}
h2 {
  color: #414042;
  text-transform: uppercase;
  font-size: 17px;
  font-weight: 700;
}

label {
  font-size: 13px;
  margin-bottom: 7px;
  color: #666666;
}
select,
textarea,
input::placeholder {
  font-size: 14px;
  color: #666666;
  font-style: italic;
}

button {
  width: 150px;
  border: none;
  background-color: #d1d1d1;
}
button:last-child {
  background-color: #50bced;
}
.buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 41rem;
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

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type='text'],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

select,
input[type='date'] {
  width: 290px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn-salvar {
  background-color: #50bbce;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
