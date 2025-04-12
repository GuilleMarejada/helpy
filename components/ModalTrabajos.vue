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

            <!-- Body con lista mejorada con scroll interno si es necesario -->
            <div class="p-6 max-h-[60vh] overflow-y-auto">
                <ul class="divide-y divide-gray-200">
                    <!-- Filtramos los profesionales para mostrar solo el tipo seleccionado en NavBar -->
                    <li v-for="professionCategory in filteredProfessionals" :key="professionCategory.type">
                        <div class="mb-3 mt-3">
                            <h3 class="text-lg font-medium text-gray-800">{{ professionCategory.type }}</h3>
                        </div>
                        <ul class="space-y-2">
                            <li v-for="professional in professionCategory.professionals" :key="professional.name"
                                class="py-4 px-2 flex justify-between items-center rounded-lg transition-colors cursor-pointer"
                                :class="{ 'bg-indigo-50': isSelected(professional), 'hover:bg-gray-50': !isSelected(professional) }"
                                @click="selectProfessional(professional)">
                                <div class="flex items-center space-x-4 justify-between w-full">
                                    <div class="flex items-center space-x-4">
                                        <div
                                            class="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <span class="text-indigo-600 text-lg font-bold">{{
                                                professional.name.charAt(0)
                                                }}</span>
                                        </div>
                                        <div>
                                            <p class="font-medium text-gray-800">{{ professional.name }}</p>
                                            <div class="flex items-center text-sm text-gray-500">
                                                <span>Profesional verificado</span>
                                                <span class="mx-2">•</span>
                                                <span class="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20"
                                                        fill="currentColor">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    {{ professional.rating || '4.9' }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-lg font-semibold text-indigo-600">{{ professional.price }}€</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- Footer mejorado -->
            <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
                <button @click="closeModal"
                    class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    Cancelar
                </button>
                <button @click="continuar"
                    class="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg transition-colors shadow-md"
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
    const title = computed(() => mainStore.selectedService);
    const selectedProf = ref(null);

    // Estado para controlar la animación
    const animationComplete = ref(false);

    // Utilizamos el estado del store para controlar la visibilidad
    const modalVisible = computed(() => mainStore.modals.modalTrabajos);

    // Filtramos los profesionales para mostrar solo el tipo seleccionado en NavBar
    const filteredProfessionals = computed(() => {
        if (!mainStore.selectedService || !mainStore.selectedProfessional) {
            return [];
        }

        return mainStore.professionals[mainStore.selectedService]
            .filter(category => category.type === mainStore.selectedProfessional);
    });

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
            // Abrir el siguiente modal (modalContratar)
            mainStore.openModal('modalContratar');
        }
    };

    const closeModal = () => {
        animationComplete.value = false;
        setTimeout(() => {
            mainStore.closeModal('modalTrabajos');
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