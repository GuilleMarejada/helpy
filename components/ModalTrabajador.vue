<template>
    <!-- Overlay con fondo semitransparente y animación -->
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="closeModal" v-if="modalVisible">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"
            :class="{ 'opacity-0': !animationComplete, 'opacity-100': animationComplete }" @click.self="closeModal"
            v-show="modalVisible" transition="fade"></div>
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden transform transition duration-300 ease-out"
            :class="{ 'opacity-0 translate-y-8': !animationComplete, 'opacity-100 translate-y-0': animationComplete }">
            <!-- Header con diseño mejorado y botón de cierre -->
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4 flex items-center">
                <h2 class="text-2xl font-bold flex-1 text-center">Selecciona un helper de {{ title }}</h2>
                <button @click="closeModal" class="text-white hover:text-gray-200 transition-colors focus:outline-none"
                    aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Body con lista mejorada -->
            <div class="p-6 max-h-[60vh] overflow-y-auto">
                <div v-if="category && category.professionals && category.professionals.length > 0">
                    <div class="grid gap-4">
                        <div v-for="(professional, index) in category.professionals" :key="index"
                            @click="selectProfessional(professional)"
                            class="border rounded-lg p-4 cursor-pointer transition-all duration-200"
                            :class="isSelected(professional) ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center space-x-4">
                                    <div class="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span class="text-blue-600 font-bold text-xl">{{ professional.name.charAt(0)
                                        }}</span>
                                    </div>
                                    <div>
                                        <h3 class="font-medium text-lg">{{ professional.name }}</h3>
                                        <div class="flex items-center mt-1">
                                            <div class="flex items-center text-yellow-400 mr-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                                                    viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <span class="ml-1 text-sm">{{ professional.rating }}</span>
                                            </div>
                                            <span class="text-sm text-gray-500">• {{ professional.price }}€/hora</span>
                                        </div>
                                    </div>
                                </div>
                                <div v-if="isSelected(professional)" class="text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center p-8 text-gray-500">
                    No hay profesionales disponibles en esta categoría.
                </div>
            </div>

            <!-- Footer mejorado -->
            <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
                <button @click="closeModal"
                    class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    Cancelar
                </button>
                <button @click="continuar"
                    class="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                    :disabled="!selectedProf"
                    :class="{ 'opacity-50 cursor-not-allowed': !selectedProf, 'hover:bg-indigo-700': selectedProf }">
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
    const title = computed(() => mainStore.selectedProfessional);
    // Estado para controlar la animación y profesional seleccionado
    const animationComplete = ref(false);
    const selectedProf = ref(null);

    // Utilizamos el estado del store para controlar la visibilidad
    const modalVisible = computed(() => mainStore.modals.modalTrabajador);

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
    const category = computed(() => {
        return mainStore.professionals[mainStore.selectedService].find(
            (category) => category.type === mainStore.selectedProfessional
        );
    });
    const selectProfessional = (professional) => {
        selectedProf.value = professional;
    };

    const isSelected = (professional) => {
        return selectedProf.value && selectedProf.value.name === professional.name;
    };

    const continuar = () => {
        if (selectedProf.value) {
            // Guardar el profesional seleccionado en el store
            mainStore.selectedProfessional = selectedProf.value;
            // Cerrar este modal
            closeModal();
            // Abrir el siguiente modal
            mainStore.openModal('modalTrabajos');
        }
    };

    const closeModal = () => {
        animationComplete.value = false;
        setTimeout(() => {
            mainStore.closeModal('modalTrabajador');
        }, 300);
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