<template>
    <div>
      <h1>Clientes</h1>
      <ClienteForm @clienteAdicionado="atualizarClientes" />
      <ul>
        <li v-for="cliente in clientes" :key="cliente.id">{{ cliente.nome }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import ClienteForm from '../components/ClienteForm.vue';
  
  export default {
    components: { ClienteForm },
    data() {
      return {
        clientes: []
      };
    },
    methods: {
      atualizarClientes(cliente) {
        this.clientes.push(cliente);
      }
    }
  };
  </script>
  