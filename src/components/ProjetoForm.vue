<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <!-- <button class="modal-close" @click="closeModal">&times;</button> -->
        <h2>{{ isEditMode ? 'Editar Projeto' : 'Novo Projeto' }}</h2>
        <form @submit.prevent="adicionarProjeto">
          <!-- Primeira Linha: Nome do Projeto -->
          <div class="form-group">
            <label for="nomeProjeto">Nome do Projeto</label>
            <input type="text" class="form-control" v-model="nomeProjeto" placeholder="Projeto 1" />
          </div>
          <!-- Segunda Linha: Selecionar Cliente e Status do Projeto -->
          <div class="form-row">
            <div class="form-group">
              <label for="nomeCliente">Selecionar Cliente</label>
              <div class="select-wrapper">
                <select class="form-control" v-model="nomeCliente">
                  <option>Cliente 1</option>
                  <option>Cliente 2</option>
                  <option>Cliente 3</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="statusProjeto">Status do Projeto</label>
              <div class="select-wrapper">
                <select class="form-control" v-model="statusProjeto">
                  <option>Aberto</option>
                  <option>Em Andamento</option>
                  <option>Concluído</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Terceira Linha: Descrição -->
          <div class="form-group">
            <label for="descricaoProjeto">Descrição</label>
            <textarea
              type="text"
              rows="3"
              class="form-control"
              v-model="descricaoProjeto"
              placeholder="Descreva sobre o projeto"
            ></textarea>
          </div>
          <!-- Botões de Salvar e Cancelar -->
          <div class="form-group buttons">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
            <button type="submit" class="btn btn-primary">
              {{ isEditMode ? 'Salvar' : 'Adicionar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projeto: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      nomeProjeto: this.projeto?.nomeProjeto || '',
      nomeCliente: this.projeto?.nomeCliente || 'Cliente 1',
      statusProjeto: this.projeto?.status || 'Aberto',
      descricaoProjeto: this.projeto?.descricao || '',
      isActive: false
    }
  },
  computed: {
    isEditMode() {
      return !!this.projeto
    }
  },
  methods: {
    adicionarProjeto() {
      const projeto = {
        id: this.projeto?.id || Date.now(),
        nomeProjeto: this.nomeProjeto,
        nomeCliente: this.nomeCliente,
        status: this.statusProjeto,
        descricao: this.descricaoProjeto,
        atividades: this.projeto?.atividades || []
      }
      this.$emit('projetoAdicionado', projeto)
      this.resetForm()
      this.closeModal()
    },
    resetForm() {
      this.nomeProjeto = ''
      this.nomeCliente = 'Cliente 1'
      this.statusProjeto = 'Aberto'
      this.descricaoProjeto = ''
    },
    closeModal() {
      this.isActive = false
    },
    openModal() {
      this.isActive = true
    }
  },
  watch: {
    projeto: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.nomeProjeto = newVal.nomeProjeto
          this.nomeCliente = newVal.nomeCliente
          this.statusProjeto = newVal.status
          this.descricaoProjeto = newVal.descricao
        } else {
          this.resetForm()
        }
      }
    }
  }
}
</script>

<style scoped>
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
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
}
.modal.is-active {
  display: flex;
}
.modal-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  position: relative;
  background: #fff;
  padding: 30px;
  padding-bottom: 10px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.modal-close:hover {
  color: #f00;
}
.form-group {
  margin-bottom: 15px;
}
.form-row {
  display: flex;
  justify-content: space-between;
}
.form-row .form-group {
  flex: 1;
  margin-right: 10px;
}
.form-row .form-group:last-child {
  margin-right: 0;
}
.select-wrapper {
  position: relative;
}
select.form-control {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"><path fill="none" stroke="black" stroke-width="2" d="M1 4l6 6 6-6"/></svg>')
    no-repeat right 10px center/8px 10px;
  padding-right: 30px;
}
</style>
