<template>
    <!-- Overlay con fondo semitransparente -->
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden transform transition-all">
            <!-- Header con diseño mejorado -->
            <div class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-4">
                <h2 class="text-2xl font-bold text-center">Selecciona un helper</h2>
            </div>

            <!-- Body con lista mejorada -->
            <div class="p-6">
                <ul class="divide-y divide-gray-200">
                    <li v-for="professional in mainStore.professionals[mainStore.selectedService]"
                        :key="professional.name"
                        class="py-4 px-2 flex justify-between items-center hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
                        <div class="flex items-center space-x-4">
                            <div class="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                <span class="text-indigo-600 text-lg font-bold">{{ professional.name.charAt(0) }}</span>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800">{{ professional.name }}</p>
                                <p class="text-sm text-gray-500">Profesional verificado</p>
                            </div>
                        </div>
                        <span class="text-lg font-semibold text-indigo-600">{{ professional.price }}€</span>
                    </li>
                </ul>
            </div>

            <!-- Footer mejorado -->
            <div class="bg-gray-50 px-6 py-4 flex justify-end space-x-3 border-t border-gray-200" v-if="dateSelected">
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
    const dateSelected = ref(false); // Add missing ref

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