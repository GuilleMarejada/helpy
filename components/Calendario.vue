<template>
  <div :class="containerClass">
    <div class="w-fit mx-auto">
      <VueDatePicker class="" v-model="date" @update:model-value="handleDate" inline auto-apply />
    </div>
    <div class="text-center mt-4">
      <p class="text-lg font-semibold text-gray-700">Fecha seleccionada: {{ date }}</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  import { useMainStore } from '@/stores/main';

  // Define props to accept class
  const props = defineProps({
    class: {
      type: String,
      default: ''
    }
  });

  // Use the class from props
  const containerClass = computed(() => props.class);

  const date = ref(new Date());
  const mainStore = useMainStore();
  const handleDate = (modelData) => {
    date.value = modelData;
    mainStore.selectedDate = date.value;
  }
</script>