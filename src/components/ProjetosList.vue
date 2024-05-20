<template>
  <div>
    <table class="table">
      <thead class="table-head">
        <tr>
          <th>ID</th>
          <th>Nome do Projeto</th>
          <th>Nome do Cliente</th>
          <th>Status</th>
          <th>Atividades</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td class="link-id" >{{ projeto.id }}</td>
          <td>{{ projeto.nomeProjeto }}</td>
          <td>{{ projeto.nomeCliente }}</td>
          <td class="status">{{ projeto.status }}</td>
          <td>
            <button class="btn btn-link" @click="$emit('projetoSelecionado', projeto)">
              ACESSAR
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    projetos: Array
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
.status {
  color: #f05929;
}

.btn-link {
  color: #f45327;
  text-decoration: none;
  border-color: #f45327;
  border-radius: 8px;
  width: 100px;
  height: 25px;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
}
.btn-link:hover {
  color: #fff;
  text-decoration: none;
  background-color: #f45327;
  border-radius: 8px;
  width: 100px;
  height: 25px;
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: center;
}
.table td:last-child {
  justify-content: center;
  display: flex;
}
</style>
