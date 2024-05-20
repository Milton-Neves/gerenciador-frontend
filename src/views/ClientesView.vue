<template>
  <div class="clientes-view">
    <h1 class="titulo">Clientes</h1>
    <div class="box">
      <div class="btnNovoCliente" @click="toggleNovoCliente">
        Novo cliente
        <button class="buttonOpenCollapse">+</button>
      </div>
      <!-- Aqui, corrigimos para passar a prop 'clientes' em vez de 'projetos' -->
      <ClienteList :clientes="clientes" />
      <!-- O ClienteForm será exibido como um modal -->
    </div>
    <ClienteForm ref="clienteForm" @clienteAdicionado="atualizarClientes" />
  </div>
</template>

<script>
import ClienteForm from '../components/ClienteForm.vue'
import ClienteList from '../components/ClienteList.vue' // Importa o componente ClienteList

export default {
  components: { ClienteForm, ClienteList }, // Adiciona o componente ClienteList
  data() {
    return {
      clientes: []
    }
  },
  methods: {
    atualizarClientes(cliente) {
      this.clientes.push(cliente)
    },
    toggleNovoCliente() {
      // Abre o modal do formulário do cliente
      this.$refs.clienteForm.openModal()
      console.log('teste')
    }
  }
}
</script>

<style scoped>
.clientes-view {
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
.btnNovoCliente {
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
