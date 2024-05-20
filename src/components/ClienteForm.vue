<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <h2>{{ modo === 'edicao' ? 'Editar Cliente' : 'Novo Cliente' }}</h2>
        <form @submit.prevent="adicionarOuEditarCliente">
          <div class="form-group">
            <label for="nomeCliente">Nome do Cliente</label>
            <input
              type="text"
              class="form-control"
              v-model="nomeCliente"
              placeholder="Nome do Cliente"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="email"
              placeholder="Email do Cliente"
            />
          </div>
          <div class="form-group">
            <label for="telefone">Telefone</label>
            <input
              type="tel"
              class="form-control"
              v-model="telefone"
              placeholder="Telefone do Cliente"
            />
          </div>
          <div class="form-group">
            <label for="descricao">Descrição</label>
            <textarea
              class="form-control"
              v-model="descricao"
              placeholder="Descrição do Cliente"
            ></textarea>
          </div>
          <div class="form-group buttons">
            <button type="button" class="btn btn-secondary" @click="closeModal">Cancelar</button>
            <button type="submit" class="btn btn-primary">
              {{ modo === 'edicao' ? 'Salvar' : 'Adicionar' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nomeCliente: '',
      email: '',
      telefone: '',
      descricao: '',
      isActive: false
    }
  },
  props: {
    modo: {
      type: String,
      default: 'novo'
    }
  },
  methods: {
    adicionarOuEditarCliente() {
      const cliente = {
        id: this.cliente?.id || Date.now(),
        nomeCliente: this.nomeCliente,
        email: this.email,
        telefone: this.telefone,
        descricao: this.descricao
      }
      this.$emit('clienteAdicionado', cliente)
      this.resetForm()
      this.closeModal()
    },
    resetForm() {
      this.nomeCliente = ''
      this.email = ''
      this.telefone = ''
      this.descricao = ''
    },
    closeModal() {
      this.isActive = false
    },
    openModal() {
      this.isActive = true
    }
  },
  watch: {
    cliente: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.nomeCliente = newVal.nomeCliente
          this.email = newVal.email
          this.telefone = newVal.telefone
          this.descricao = newVal.descricao
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
