<template>
  <VueDatePicker class="" v-model="date" @update:model-value="handleDate" inline auto-apply />
  <div class="text-center mt-4">
    <p class="text-lg font-semibold text-gray-700">Fecha seleccionada: {{ date }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';

  const date = ref(new Date());
  const mainStore = useMainStore();
  const handleDate = (modelData) => {
    date.value = modelData;
    mainStore.selectedDate = date.value;
  }
</script>