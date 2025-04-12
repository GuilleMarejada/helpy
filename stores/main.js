// stores/main.js
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
    state: () => {
        return {
            services: [
                { text: "Hogar y reparaciones" },
                { text: "Belleza y bienestar" },
                { text: "Clases particulares y aprendizaje" },
                { text: "Cuidados" },
                { text: "Mascotas" },
                { text: "Deportes" },
                { text: "Mudanzas" },
                { text: "Trámites y gestión" }
            ],
            selectedService: null,
            professionals: {
                "Hogar y reparaciones": [
                    { name: "Juan Pérez", rating: 4.5, price: 50 },
                    { name: "María López", rating: 4.7, price: 60 },
                ],
                "Belleza y bienestar": [
                    { name: "Ana García", rating: 4.9, price: 30 },
                    { name: "Luis Martínez", rating: 4.6, price: 40 },
                ],
                "Clases particulares y aprendizaje": [
                    { name: "Carlos Sánchez", rating: 4.8, price: 20 },
                    { name: "Laura Fernández", rating: 4.7, price: 25 },
                ],
                "Cuidados": [
                    { name: "Sofía Gómez", rating: 4.9, price: 35 },
                    { name: "Pedro Ruiz", rating: 4.5, price: 30 },
                ],
                "Mascotas": [
                    { name: "Marta Díaz", rating: 4.8, price: 20 },
                    { name: "Javier Torres", rating: 4.6, price: 25 },
                ],
                "Deportes": [
                    { name: "Clara Jiménez", rating: 4.7, price: 30 },
                    { name: "Diego Morales", rating: 4.8, price: 35 },
                ],
                "Mudanzas": [
                    { name: "Andrés Castro", rating: 4.5, price: 50 },
                    { name: "Patricia Romero", rating: 4.6, price: 55 },
                ],
                "Trámites y gestión": [
                    { name: "Raúl Herrera", rating: 4.9, price: 40 },
                    { name: "Isabel Ortega", rating: 4.8, price: 45 },
                ]


            },
        }
    },
    actions: {
        // Add your action methods here
    }
})