<template>
    <div>
      <h2>Novo Projeto</h2>
      <form @submit.prevent="adicionarProjeto">
        <div class="form-group">
          <label for="nomeProjeto">Nome do Projeto</label>
          <input type="text" class="form-control" v-model="nomeProjeto" />
        </div>
        <div class="form-group">
          <label for="nomeCliente">Nome do Cliente</label>
          <input type="text" class="form-control" v-model="nomeCliente" />
        </div>
        <button type="submit" class="btn btn-primary">Adicionar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nomeProjeto: '',
        nomeCliente: ''
      };
    },
    methods: {
      adicionarProjeto() {
        const novoProjeto = { id: Date.now(), nomeProjeto: this.nomeProjeto, nomeCliente: this.nomeCliente, status: 'Em Andamento', atividades: [] };
        this.$emit('projetoAdicionado', novoProjeto);
        this.nomeProjeto = '';
        this.nomeCliente = '';
      }
    }
  };
  </script>
  