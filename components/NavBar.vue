<template>
    <nav class="bg-white shadow-md">
        <!-- Barra de navegación principal -->
        <div class="mx-auto">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/"> <img class="w-28 px-2" src="/images/LogoNormal1.webp" alt="Hero Image">
                        </a>
                    </div>
                    <!-- Enlaces de navegación -->
                    <div class="flex">
                        <div class="hidden md:flex items-center space-x-8">
                            <a v-for="link in mainLinks" :key="link.text" :href="link.href"
                                class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                {{ link.text }}
                            </a>
                        </div>
                        <!-- Botón de iniciar sesión -->
                        <div class="flex items-center">
                            <button
                                class="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6C63FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                                Iniciar sesión
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Sección de servicios -->
        <div class="bg-gray-50 py-4 border-t border-gray-200">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul class="flex flex-wrap justify-center gap-4">
                    <li v-for="service in services" :key="service.text" class="relative group">
                        <button
                            class="px-5 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out border border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 hover:text-[#6C63FF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="toggleDropdown(service.text)">
                            {{ service.text }}
                        </button>

                        <!-- Menú desplegable para los tipos profesionales -->
                        <div v-if="activeDropdown === service.text"
                            class="absolute z-10 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg py-1 left-0">
                            <div class="max-h-60 overflow-y-auto">
                                <button v-for="type in getProfessionalTypes(service.text)" :key="type.type"
                                    @click="() => { selectProfessionalType(service.text, type.type); startModalFlow(); }"
                                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-[#6C63FF]">
                                    {{ type.type }}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Incluimos todos los modales y los controlamos mediante el store -->
        <ModalTrabajador />
        <ModalTrabajos />
        <ModalContratar />
    </nav>
</template>

<script setup>
    import { useMainStore } from '@/stores/main'
    import ModalContratar from '@/components/ModalContratar.vue'
    import ModalTrabajador from '@/components/ModalTrabajador.vue'
    import ModalTrabajos from '@/components/ModalTrabajos.vue'

    const mainStore = useMainStore()
    const mainLinks = ref([
        { text: "Trabaja con nosotros", href: "/helper" },
    ]);
    const services = ref(mainStore.services);
    const activeDropdown = ref(null);
    const startModalFlow = () => {
        mainStore.openModal('modalContratar');
    };
    const selectProfessionalType = (serviceText, typeText) => {
        mainStore.selectedService = serviceText;
        mainStore.selectedProfessional = typeText;
        mainStore.profecionalType = typeText;
        activeDropdown.value = null;
    };
    const getProfessionalTypes = (serviceText) => {
        return mainStore.professionals[serviceText] || [];
    };
    const toggleDropdown = (serviceText) => {
        if (activeDropdown.value === serviceText) {
            activeDropdown.value = null;
        } else {
            activeDropdown.value = serviceText;
        }
    };
    const handleClickOutside = (event) => {
        if (activeDropdown.value && !event.target.closest('.relative.group')) {
            activeDropdown.value = null;
        }
    };
    const handleEscKey = (event) => {
        if (event.key === 'Escape' && activeDropdown.value) {
            activeDropdown.value = null;
        }
    };

    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside);
        document.removeEventListener('keydown', handleEscKey);
    });
</script>

<style scoped>

    .z-10 {
        z-index: 10;
    }
</style>