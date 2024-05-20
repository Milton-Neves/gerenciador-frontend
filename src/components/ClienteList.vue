<template>
  <div>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th>ID</th>
          <th>Nome do Cliente</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cliente in clientes" :key="cliente.id">
          <td class="link-id">{{ cliente.id }}</td>
          <td>{{ cliente.nomeCliente }}</td>
          <td>{{ cliente.email }}</td>
          <td>{{ cliente.telefone }}</td>
          <td>{{ cliente.descricao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    clientes: Array
  }
}
</script>

<style scoped>
.table {
  border-color: transparent;
  margin-top: 30px;
  width: 100%;
}
.table-head th,
td {
  text-align: center;
}

.table th {
  background: #f8f6f7;
  color: #414042;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
}
.table th,
.table td {
  padding: 8px;
}
.link-id {
  color: #c83e2b;
  text-decoration: underline;
  cursor: pointer;
}
</style>
