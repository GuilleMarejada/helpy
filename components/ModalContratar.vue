<template>
  <!-- Overlay con fondo semitransparente -->
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-6xl overflow-hidden transform transition-all">
      <!-- Header moderno -->
      <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 flex items-center">
        <h2 class="text-2xl font-bold flex-1 text-center">Selecciona la fecha y hora - {{ title }}</h2>
        <button @click="closeModal" class="text-white hover:text-gray-200 transition-colors focus:outline-none"
          aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Body con mejor diseño y espaciado -->
      <div class="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div class="md:w-1/2 bg-gray-50 p-4 rounded-lg shadow-inner">
          <Calendario class="max-w-full" />
        </div>
        <div class="md:w-1/2 flex justify-center items-center">
          <img :src="`/images/${title}.png`" :alt="title" class="max-h-80 object-contain rounded-lg shadow-md" />
        </div>
      </div>

      <!-- Footer con botones mejorados -->
      <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
        <button @click="closeModal"
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          Cancelar
        </button>
        <button @click="closeModal"
          class="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import { useMainStore } from "@/stores/main";

  const props = defineProps({
    // You can add props here if needed
  });

  const emit = defineEmits(["close"]);

  const mainStore = useMainStore();
  const title = mainStore.selectedService;

  const closeModal = () => {
    emit("close");
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleEscKey);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscKey);
  });
</script>