// stores/main.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            services: [
                { text: "Fontaneria" },
                { text: "Electricidad" },
                { text: "Carpinteria" },
                { text: "Jardineria" },
                { text: "Pintura" },
                { text: "Cerrajeria" },
                { text: "Albañileria" },
            ],
            selectedService: null,
        }
    },
    actions: {
        // Add your action methods here
    }
})