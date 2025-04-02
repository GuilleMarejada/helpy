<template>
    <nav class="text-white">
        <div class="mx-auto flex justify-center font-bold">
            <div class="max-w-[1500px] w-full flex justify-between items-center px-8 py-4">
                <a href="/" class="text-4xl font-bold">Helpy</a>
                <span class="flex space-x-4" >
                    <a v-for="link in mainLinks" :key="link.text" :href="link.href">
                        {{ link.text }}
                    </a>
                </span>
            </div>
        </div>
        <!-- Escucha el evento emitido por ModalContratar -->
        <ModalContratar v-if="isVisible" @close="toggleModal" />
        <div class="container font-semibold mx-auto flex justify-center mt-5">
            <ul class="flex space-x-4">
                <li v-for="service in services" :key="service.text">
                    <button
                        class="border cursor-pointer border-gris rounded-md p-2 hover:bg-azul transition duration-300 ease-in-out"
                        @click="() => { selectService(service.text); toggleModal(); }">
                        {{ service.text }}
                    </button>
                </li>
            </ul>
        </div>
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
    
    const services = ref(mainStore.services);

    const selectService = (serviceText) => {
        mainStore.selectedService = serviceText;
    };
    
    const toggleModal = () => {
        console.log("Modal triggered");
        isVisible.value = !isVisible.value;
    };
</script>