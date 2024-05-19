<template>
  <div class="sidebar">
    <div class="sidebar-box">
      <h1 class="titulo">TeamFlow</h1>
      <hr />
      <router-link to="/clientes" class="sidebar-link">Clientes</router-link>
      <hr />
      <router-link to="/projetos" class="sidebar-link">Projetos</router-link>
      <hr />
    </div>

    <!-- Adicione mais links conforme necessário -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Sidebar',
  components: {
    RouterLink
  }
})
</script>

<style scoped>
hr {
  color: #d7d3d3;
}
.sidebar {
  width: 269px;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;
  align-items: end;
  border-right: 1px solid #f4f7fe;
}
.sidebar-box {
  position: fixed;
  bottom:  200px;
}
.titulo {
  color: #6e7177;
  text-align: center;
  padding: 20px 25px;
  font-size: 28px;
  background-color: #f4f7fe;
  margin: 0 30px 35px;
}

.sidebar-link {
  display: block;
  color: #6e7177;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
  text-transform: uppercase;
  font-weight: 700;
  margin: 10px 30px;
  letter-spacing: 1px;
}

.sidebar-link:hover {
  background-color: #f4f7fe;
  border-radius: 5px;
}

.sidebar-link.active {
  background-color: #f4f7fe;
  border-radius: 5px;
}
</style>
