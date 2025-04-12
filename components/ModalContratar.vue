<template>
  <!-- Overlay con fondo semitransparente mejorado con backdrop blur y animación -->
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal" v-if="modalVisible">
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      :class="{ 'opacity-0': !animationComplete, 'opacity-100': animationComplete }" @click.self="closeModal"
      v-show="modalVisible" transition="fade"></div>
    <div
      class="bg-white rounded-xl shadow-2xl w-full max-w-6xl overflow-hidden transform transition duration-300 ease-out"
      :class="{ 'opacity-0 translate-y-8': !animationComplete, 'opacity-100 translate-y-0': animationComplete }">
      <!-- Header moderno -->
      <div class="bg-[#6C63FF] text-white px-6 py-4 flex items-center">
        <h2 class="text-2xl font-bold flex-1 text-center">Selecciona la fecha y hora - {{ professionalType }}</h2>
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
        <div class="md:w-1/2 flex flex-col justify-center items-center space-y-4">
          <img :src="getImagePath()" :alt="professionalType" class="max-h-80 object-contain rounded-lg shadow-md" />
          <div class="text-center">
            <h3 class="text-xl font-semibold text-gray-800">{{ serviceCategory }}</h3>
            <p class="text-gray-600">{{ professionalType }}</p>
          </div>
        </div>
      </div>

      <!-- Footer con botones mejorados -->
      <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
        <button @click="closeModal"
          class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
          Cancelar
        </button>
        <button @click="handleContinue"
          class="px-6 py-2 bg-[#6C63FF] text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
          Continuar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, onBeforeUnmount, ref, computed, nextTick, watch } from 'vue';
  import { useMainStore } from "@/stores/main";

  const mainStore = useMainStore();
  const serviceCategory = computed(() => mainStore.selectedService);
  const professionalType = computed(() => mainStore.selectedProfessional);

  const animationComplete = ref(false);

  // Utilizamos el estado del store para controlar la visibilidad
  const modalVisible = computed(() => mainStore.modals.modalContratar);

  // Escuchar cambios en la visibilidad del modal desde el store
  watch(modalVisible, updateAnimationState, { immediate: true });

  async function updateAnimationState(newVal) {
    if (newVal) {
      // Esperamos al siguiente ciclo de renderizado para aplicar la transición
      await nextTick();
      animationComplete.value = true;
    } else {
      animationComplete.value = false;
    }
  }

  const getImagePath = () => {
    try {
      // Intentamos utilizar una ruta de imagen basada en el tipo de profesional
      if (professionalType.value === "Profesor de musica") return '/images/profesorMusica.jpg';
      return `/images/${professionalType.value}.jpg`;
    } catch (error) {
      // Si la imagen no existe, usamos una imagen de respaldo
      console.error('Error al cargar la imagen:', error);
      return '/images/limpiadora.webp'; // Imagen de respaldo
    }
  };

  const closeModal = () => {
    animationComplete.value = false;
    setTimeout(() => {
      mainStore.closeModal('modalContratar');
    }, 300);
  };

  const handleContinue = () => {
    // Aquí podrías navegar a otra página o abrir otro modal
    mainStore.openModal('modalTrabajador')
  };

  const handleEscKey = (event) => {
    if (event.key === 'Escape' && modalVisible.value) {
      closeModal();
    }
  };

  // Manejar el botón atrás del navegador
  const handlePopState = () => {
    if (modalVisible.value) {
      const navigatedBack = mainStore.goToPreviousModal();
      if (navigatedBack) {
        // Prevenimos la navegación predeterminada
        window.history.pushState(null, document.title, window.location.href);
      }
    }
  };

  onMounted(() => {
    document.addEventListener('keydown', handleEscKey);
    window.addEventListener('popstate', handlePopState);

    // Si el modal está abierto al montar, añadimos un estado al historial
    if (modalVisible.value) {
      window.history.pushState(null, document.title, window.location.href);
    }
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', handleEscKey);
    window.removeEventListener('popstate', handlePopState);
  });
</script>

<style scoped>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>