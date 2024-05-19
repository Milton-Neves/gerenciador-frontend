<template>
    <div>
      <h2>Novo Cliente</h2>
      <form class="form" @submit.prevent="adicionarCliente">
        <div class="form-group">
          <label for="nome">Nome</label>
          <input type="text" class="form-control" v-model="nome" />
        </div>
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nome: ''
      };
    },
    methods: {
      adicionarCliente() {
        const novoCliente = { id: Date.now(), nome: this.nome };
        this.$emit('clienteAdicionado', novoCliente);
        this.nome = '';
      }
    }
  };
  </script>
  <style scoped>
  .form {
    padding: 20px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>