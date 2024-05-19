<template>
    <div v-if="show" class="modal">
      <!-- Conteúdo do modal para exibir detalhes da atividade -->
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  export default defineComponent({
    name: 'AtividadeModal',
    props: {
      show: {
        type: Boolean,
        required: true
      },
      atividade: {
        type: Object as PropType<{ id: number; nome: string; descricao: string }>,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  /* Estilos para o modal */
  </style>
  