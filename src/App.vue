<template>
  <div id="app">
    <Sidebar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from './components/Sidebar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Sidebar
  }
})
</script>

<style>
#app {
  display: flex;
  width: 100%;
}
.content {
  background-color: #f4f7fe;
  width: 100%;
}
</style>
