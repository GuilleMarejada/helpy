<template>
  <div class="text-center font-sans m-5 text-black">
    <h2 class="mb-2 text-lg font-semibold">Selecciona una fecha y hora</h2>
    <input 
      type="datetime-local" 
      v-model="selectedDateTime" 
      class="border rounded p-2" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedDateTime = ref(null);
</script>