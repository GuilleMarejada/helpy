// stores/counter.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
            services: [
                { text: "Fontaneria", href: "#" },
                { text: "Electricidad", href: "#" },
                { text: "Carpinteria", href: "#" },
                { text: "Jardineria", href: "#" },
                { text: "Pintura", href: "#" },
                { text: "Cerrajeria", href: "#" },
                { text: "Albañileria", href: "#" },
            ]
        }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
    },
})