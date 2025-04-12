<template>
    <!-- Overlay con fondo semitransparente y animación -->
    <Teleport to="body">
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4" v-if="modalVisible"
            @click.self="closeModal">
            <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
                :class="{ 'opacity-0': !animationComplete, 'opacity-100': animationComplete }" @click.self="closeModal">
            </div>
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden transform transition duration-300 ease-out"
                :class="{ 'opacity-0 translate-y-8': !animationComplete, 'opacity-100 translate-y-0': animationComplete }">
                <!-- Header con diseño mejorado y botón de cierre -->
                <div class="bg-[#6C63FF] text-white px-6 py-4 flex items-center">
                    <h2 class="text-2xl font-bold flex-1 text-center">
                        <span class="inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Resumen de servicios
                        </span>
                    </h2>
                    <button @click="closeModal"
                        class="text-white hover:text-gray-200 transition-colors focus:outline-none" aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!-- Información del servicio -->
                <div class="px-8 py-6 space-y-4">
                    <div class="flex items-start">
                        <div class="bg-blue-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-semibold text-gray-800">{{ serviceCategory }}</h3>
                            <p class="text-gray-500">Tipo de servicio</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="bg-indigo-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#6C63FF]" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">{{ selectedProfessional.name }}
                                ({{ selectedProfessional.rating }})</p>
                            <p class="text-gray-500">Profesional seleccionado</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="bg-green-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">{{ date }}</p>
                            <p class="text-gray-500">Fecha seleccionada</p>
                        </div>
                    </div>

                    <div class="flex items-start" v-if="mainStore.profecionalType">
                        <div class="bg-purple-100 p-2 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">{{ mainStore.profecionalType }}
                            </p>
                            <p class="text-gray-500">Tipo de profesional</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-lg font-medium text-gray-800">Precio: {{
                            selectedProfessional.price }}€/hora</p>
                        <p class="text-gray-500">Precio estimado</p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200">
                    <button @click="closeModal"
                        class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                        Cancelar
                    </button>
                    <button @click="continuar"
                        class="px-6 py-2 bg-[#6C63FF] text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
                        :disabled="!isFormValid" :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }">
                        <span class="flex items-center">
                            Confirmar
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup>
    import { onMounted, onBeforeUnmount, ref, computed, nextTick, watch } from 'vue';
    import { useMainStore } from "@/stores/main";

    const mainStore = useMainStore();

    // Computed properties para acceder a datos del store
    const serviceCategory = computed(() => mainStore.selectedService);
    const selectedProfessional = computed(() => mainStore.selectedProfessional);
    const date = computed(() => mainStore.selectedDate);
    const modalVisible = computed(() => mainStore.modals.modalTrabajos);

    // Validación para habilitar el botón continuar
    const isFormValid = computed(() =>
        !!selectedProfessional.value // Verificamos que haya un profesional seleccionado
    );

    // Estado para controlar la animación
    const animationComplete = ref(false);

    // Escuchar cambios en la visibilidad del modal
    watch(modalVisible, async (newVal) => {
        if (newVal) {
            await nextTick();
            animationComplete.value = true;

            // Añadir estado al historial del navegador cuando se abre el modal
            window.history.pushState(null, document.title, window.location.href);
        } else {
            animationComplete.value = false;
        }
    }, { immediate: true });

    // Métodos
    const continuar = () => {
        alert('Procedemos a la contratación del profesional seleccionado.');
    };

    const closeModal = () => {
        animationComplete.value = false;
        setTimeout(() => {
            mainStore.closeModal('modalTrabajos');
        }, 300);
    };

    // Event handlers
    const handleEscKey = (event) => {
        if (event.key === 'Escape' && modalVisible.value) {
            closeModal();
        }
    };

    const handlePopState = () => {
        if (modalVisible.value) {
            const navigatedBack = mainStore.goToPreviousModal();
            if (navigatedBack) {
                window.history.pushState(null, document.title, window.location.href);
            }
        }
    };

    // Lifecycle hooks
    onMounted(() => {
        document.addEventListener('keydown', handleEscKey);
        window.addEventListener('popstate', handlePopState);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', handleEscKey);
        window.removeEventListener('popstate', handlePopState);
    });
</script>

<style scoped>

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: translateY(10px);
    }
</style>