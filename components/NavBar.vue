<template>
    <nav class="bg-white shadow-md">
        <!-- Barra de navegación principal -->
        <div class="mx-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/" class="text-3xl font-extrabold text-indigo-600">
                            Helpy<span class="text-blue-400">.</span>
                        </a>
                    </div>

                    <!-- Enlaces de navegación -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a v-for="link in mainLinks" :key="link.text" :href="link.href"
                            class="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            {{ link.text }}
                        </a>
                    </div>

                    <!-- Botón de iniciar sesión -->
                    <div class="flex items-center">
                        <button
                            class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sección de servicios -->
        <div class="bg-gray-50 py-4 border-t border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="flex flex-wrap justify-center gap-4">
                    <li v-for="service in services" :key="service.text">
                        <button
                            class="px-5 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="() => { selectService(service.text); openModal(); }">
                            {{ service.text }}
                        </button>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Modales -->
        <ModalContratar v-if="isVisible" @close="closeModal" />
        <ModalTrabajador v-if="isVisibleTrabajador && !isVisible" @close="closeModalTrabajador" />
    </nav>
</template>

<script setup>
    import { useMainStore } from '@/stores/main'
    import { ref } from 'vue'
    import ModalContratar from '@/components/ModalContratar.vue'

    const mainStore = useMainStore()

    const mainLinks = ref([
        { text: "Cuenta", href: "/" },
        { text: "Trabaja con nosotros", href: "/helper" },
    ]);
    const isVisible = ref(false);
    const isVisibleTrabajador = ref(false);
    const services = ref(mainStore.services);

    const selectService = (serviceText) => {
        mainStore.selectedService = serviceText;
    };
    const openModal = () => {
        console.log("Modal triggered");
        isVisible.value = !isVisible.value;
    };
    const closeModal = () => {
        console.log("Modal closed");
        isVisible.value = false;
        isVisibleTrabajador.value = true;
    };
    const closeModalTrabajador = () => {
        console.log("Modal closed");
        isVisibleTrabajador.value = false;
    };

</script>