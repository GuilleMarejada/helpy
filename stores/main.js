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
            selectedProfessional: null,
            selectedDate: null,
            professionals: {
                "Hogar y reparaciones": [
                    {
                        type: "Cerrajero",
                        professionals: [
                            { name: "Juan Pérez", rating: 4.5, price: 50 },
                            { name: "María López", rating: 4.7, price: 60 }
                        ]
                    },
                    {
                        type: "Albañil",
                        professionals: [
                            { name: "Pedro González", rating: 4.6, price: 70 },
                            { name: "Ana Martínez", rating: 4.8, price: 80 }
                        ]
                    },
                    {
                        type: "Fontanero",
                        professionals: [
                            { name: "Luis Fernández", rating: 4.9, price: 90 },
                            { name: "Sofía García", rating: 4.4, price: 100 }
                        ]
                    },
                    {
                        type: "Electricista",
                        professionals: [
                            { name: "Carlos Sánchez", rating: 4.3, price: 110 },
                            { name: "Laura Torres", rating: 4.2, price: 120 }
                        ]
                    },
                    {
                        type: "Montador",
                        professionals: [
                            { name: "Javier Díaz", rating: 4.1, price: 130 },
                            { name: "Clara Jiménez", rating: 4.0, price: 140 }
                        ]
                    }
                ],
                "Belleza y bienestar": [
                    {
                        type: "Belleza",
                        professionals: [
                            { name: "María López", rating: 4.5, price: 50 },
                            { name: "Ana Martínez", rating: 4.7, price: 60 }
                        ]
                    },
                    {
                        type: "Masajista",
                        professionals: [
                            { name: "Pedro González", rating: 4.6, price: 70 },
                            { name: "Sofía García", rating: 4.8, price: 80 }
                        ]
                    },
                    {
                        type: "Manicura",
                        professionals: [
                            { name: "Luis Fernández", rating: 4.9, price: 90 },
                            { name: "Carlos Sánchez", rating: 4.4, price: 100 }
                        ]
                    }
                ],
                "Clases particulares y aprendizaje": [
                    {
                        type: "Profesor",
                        professionals: [
                            { name: "Juan Pérez", rating: 4.5, price: 50 },
                            { name: "María López", rating: 4.7, price: 60 }
                        ]
                    },
                    {
                        type: "Profesor de musica",
                        professionals: [
                            { name: "Pedro González", rating: 4.6, price: 70 },
                            { name: "Ana Martínez", rating: 4.8, price: 80 }
                        ]
                    }
                ],
                "Cuidados": [
                    {
                        type: "Cuidador",
                        professionals: [
                            { name: "Luis Fernández", rating: 4.9, price: 90 },
                            { name: "Sofía García", rating: 4.4, price: 100 }
                        ]
                    }
                ],
                "Mascotas": [
                    {
                        type: "Paseador",
                        professionals: [
                            { name: "Carlos Sánchez", rating: 4.3, price: 110 },
                            { name: "Laura Torres", rating: 4.2, price: 120 }
                        ]
                    }
                ],
                "Deportes": [
                    {
                        type: "Entrenador",
                        professionals: [
                            { name: "Javier Díaz", rating: 4.1, price: 130 },
                            { name: "Clara Jiménez", rating: 4.0, price: 140 }
                        ]
                    }
                ],
                "Mudanzas": [
                    {
                        type: "Mudanza",
                        professionals: [
                            { name: "Andrés Castro", rating: 4.5, price: 50 },
                            { name: "Patricia Romero", rating: 4.6, price: 55 }
                        ]
                    }
                ],
                "Trámites y gestión": [
                    {
                        type: "Gestor",
                        professionals: [
                            { name: "Fernando Ruiz", rating: 4.7, price: 60 },
                            { name: "Isabel Ortega", rating: 4.8, price: 65 }
                        ]
                    }
                ]
            },
            // Estado para gestionar modales
            modals: {
                modalContratar: false,
                modalTrabajador: false,
                modalTrabajos: false,
                // Historial para controlar la navegación entre modales
                history: []
            }
        }
    },
    actions: {
        // Métodos para controlar los modales
        openModal(modalName) {
            // Cerrar cualquier modal abierto
            for (const modal in this.modals) {
                if (modal !== 'history' && this.modals[modal]) {
                    this.modals[modal] = false;
                }
            }

            // Guardar el modal actual en el historial
            if (modalName && !this.modals.history.includes(modalName)) {
                this.modals.history.push(modalName);
            }

            // Abrir el modal solicitado
            if (modalName) {
                this.modals[modalName] = true;
            }

            // Prevenir scroll en el body cuando hay un modal abierto
            document.body.classList.add('overflow-hidden');
        },

        closeModal(modalName) {
            if (modalName) {
                this.modals[modalName] = false;

                // Eliminar del historial
                const index = this.modals.history.indexOf(modalName);
                if (index !== -1) {
                    this.modals.history.splice(index, 1);
                }
            } else {
                // Si no se especifica un modal, cerrar el último abierto
                const lastModal = this.modals.history.pop();
                if (lastModal) {
                    this.modals[lastModal] = false;
                }
            }

            // Si no quedan modales abiertos, restaurar el scroll
            const anyModalOpen = Object.keys(this.modals).some(
                key => key !== 'history' && this.modals[key]
            );

            if (!anyModalOpen) {
                document.body.classList.remove('overflow-hidden');
            }
        },

        // Navegar al modal anterior (para manejar el botón atrás del navegador)
        goToPreviousModal() {
            const currentModal = this.modals.history.pop();
            if (currentModal) {
                this.modals[currentModal] = false;
            }

            const previousModal = this.modals.history[this.modals.history.length - 1];
            if (previousModal) {
                this.modals[previousModal] = true;
                return true;
            }

            // No hay más modales en el historial
            document.body.classList.remove('overflow-hidden');
            return false;
        }
    }
})