<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg w-full max-w-6xl">
        <!-- Header -->
        <div class="flex items-center border-b px-4 py-5">
          <h2 class="text-2xl font-semibold text-gray-800 mx-auto">Selecciona la fecha y la hora de tu servicio de {{ title }}</h2>
          <button 
            @click="closeModal" 
            class="text-gray-500 hover:text-gray-800ml-auto"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <!-- Body -->
        <div class="p-4 flex justify-around">
          <Calendario class="max-w-fit"/>
          <img :src="`/images/${title}.png`" alt="Descripción" />
        </div>
        
        <!-- Footer -->
        <div class="flex justify-end border-t px-4 py-2"
        v-if="dateSelected"
        >
          <button
            @click="closeModal" 
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onBeforeUnmount } from 'vue';
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