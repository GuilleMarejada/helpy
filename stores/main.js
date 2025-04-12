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
            profecionalType: null,
            professionals: {
                "Hogar y reparaciones": [
                    {
                        type: "Cerrajero",
                        professionals: [
                            { name: "Juan Pérez Gómez", rating: 4.5, price: 50 },
                            { name: "María López Sánchez", rating: 4.7, price: 60 },
                            { name: "Roberto Sanz", rating: 4.3, price: 55 },
                            { name: "Carmen Velasco", rating: 4.6, price: 65 },
                            { name: "Alejandro Rivas", rating: 4.8, price: 70 },
                            { name: "Diana Moreno", rating: 4.4, price: 58 },
                            { name: "Ernesto Cañas", rating: 4.2, price: 52 }
                        ]
                    },
                    {
                        type: "Albañil",
                        professionals: [
                            { name: "Pedro González Ruiz", rating: 4.6, price: 70 },
                            { name: "Ana Martínez Díaz", rating: 4.8, price: 80 },
                            { name: "Miguel Durán", rating: 4.5, price: 75 },
                            { name: "Elena Pardo", rating: 4.7, price: 85 },
                            { name: "Raúl Torres", rating: 4.4, price: 68 },
                            { name: "Cristina Ramos", rating: 4.9, price: 90 },
                            { name: "José Navarro", rating: 4.3, price: 72 }
                        ]
                    },
                    {
                        type: "Fontanero",
                        professionals: [
                            { name: "Luis Fernández Vega", rating: 4.9, price: 75 },
                            { name: "Sofía García Torres", rating: 4.4, price: 100 },
                            { name: "Javier Molina", rating: 4.6, price: 80 },
                            { name: "Lucía Gómez", rating: 4.7, price: 95 },
                            { name: "Antonio Romero", rating: 4.5, price: 85 },
                            { name: "Marina Castro", rating: 4.8, price: 110 },
                            { name: "David Herrera", rating: 4.3, price: 78 }
                        ]
                    },
                    {
                        type: "Electricista",
                        professionals: [
                            { name: "Carlos Sánchez Vidal", rating: 4.3, price: 110 },
                            { name: "Laura Torres Gómez", rating: 4.2, price: 120 },
                            { name: "Fernando Vega", rating: 4.7, price: 100 },
                            { name: "Natalia Serrano", rating: 4.5, price: 115 },
                            { name: "Pablo Ortiz", rating: 4.6, price: 105 },
                            { name: "Isabel Márquez", rating: 4.4, price: 108 },
                            { name: "Andrés Medina", rating: 4.8, price: 125 }
                        ]
                    },
                    {
                        type: "Montador",
                        professionals: [
                            { name: "Javier Díaz López", rating: 4.1, price: 130 },
                            { name: "Clara Jiménez Ruiz", rating: 4.0, price: 140 },
                            { name: "Sergio Blanco", rating: 4.3, price: 120 },
                            { name: "Alicia Guerrero", rating: 4.5, price: 135 },
                            { name: "Rubén Mendoza", rating: 4.2, price: 125 },
                            { name: "Beatriz Luna", rating: 4.4, price: 128 },
                            { name: "Mario Gallego", rating: 4.6, price: 145 }
                        ]
                    }
                ],
                "Belleza y bienestar": [
                    {
                        type: "Belleza",
                        professionals: [
                            { name: "María López Pineda", rating: 4.5, price: 50 },
                            { name: "Ana Martínez Gómez", rating: 4.7, price: 60 },
                            { name: "Claudia Navarro", rating: 4.6, price: 55 },
                            { name: "Ignacio Reyes", rating: 4.8, price: 65 },
                            { name: "Sonia Méndez", rating: 4.4, price: 52 },
                            { name: "Jorge Castillo", rating: 4.9, price: 70 },
                            { name: "Julia Ferrer", rating: 4.3, price: 48 }
                        ]
                    },
                    {
                        type: "Masajista",
                        professionals: [
                            { name: "Victor Ochando Calvo", rating: 4.6, price: 70 },
                            { name: "Lander Torres Lombraña", rating: 4.8, price: 80 },
                            { name: "Nuria Espinosa", rating: 4.5, price: 75 },
                            { name: "Óscar Iglesias", rating: 4.9, price: 85 },
                            { name: "Pilar Rodríguez", rating: 4.7, price: 78 },
                            { name: "Germán Vargas", rating: 4.4, price: 68 },
                            { name: "Verónica Peña", rating: 4.6, price: 72 }
                        ]
                    },
                    {
                        type: "Manicura",
                        professionals: [
                            { name: "Luis Fernández Martín", rating: 4.9, price: 90 },
                            { name: "Carlos Sánchez Ortega", rating: 4.4, price: 100 },
                            { name: "Teresa Campos", rating: 4.7, price: 85 },
                            { name: "Héctor Vidal", rating: 4.5, price: 95 },
                            { name: "Rosa Martín", rating: 4.8, price: 88 },
                            { name: "Eduardo Lara", rating: 4.3, price: 82 },
                            { name: "Silvia Quintana", rating: 4.6, price: 92 }
                        ]
                    }
                ],
                "Clases particulares y aprendizaje": [
                    {
                        type: "Profesor",
                        professionals: [
                            { name: "Juan Pérez Martínez", rating: 4.5, price: 50 },
                            { name: "María López Torres", rating: 4.7, price: 60 },
                            { name: "Alberto Delgado", rating: 4.8, price: 55 },
                            { name: "Susana Ramírez", rating: 4.6, price: 65 },
                            { name: "Ricardo Benítez", rating: 4.9, price: 70 },
                            { name: "Marta Suárez", rating: 4.4, price: 45 },
                            { name: "Enrique Morales", rating: 4.7, price: 58 }
                        ]
                    },
                    {
                        type: "Profesor de musica",
                        professionals: [
                            { name: "Pedro González Soto", rating: 4.6, price: 70 },
                            { name: "Ana Martínez Luna", rating: 4.8, price: 80 },
                            { name: "Daniel Molinero", rating: 4.5, price: 75 },
                            { name: "Irene Pascual", rating: 4.7, price: 85 },
                            { name: "Gabriel Soler", rating: 4.9, price: 90 },
                            { name: "Celia Herrero", rating: 4.4, price: 65 },
                            { name: "Roberto Fernández", rating: 4.6, price: 78 }
                        ]
                    }
                ],
                "Cuidados": [
                    {
                        type: "Cuidador",
                        professionals: [
                            { name: "Luis Fernández Ruiz", rating: 4.9, price: 90 },
                            { name: "Sofía García Méndez", rating: 4.4, price: 100 },
                            { name: "Carmen Domínguez", rating: 4.7, price: 95 },
                            { name: "Martín Alvarado", rating: 4.6, price: 85 },
                            { name: "Lucía Aranda", rating: 4.8, price: 105 },
                            { name: "Nicolás Caballero", rating: 4.5, price: 92 },
                            { name: "Eva Montero", rating: 4.3, price: 88 }
                        ]
                    }
                ],
                "Mascotas": [
                    {
                        type: "Paseador",
                        professionals: [
                            { name: "Carlos Sánchez López", rating: 4.3, price: 110 },
                            { name: "Laura Torres Blanco", rating: 4.2, price: 120 },
                            { name: "Diego Fuentes", rating: 4.5, price: 100 },
                            { name: "Sara Paredes", rating: 4.7, price: 115 },
                            { name: "Manuel Cortés", rating: 4.4, price: 105 },
                            { name: "Cristina Álvarez", rating: 4.6, price: 112 },
                            { name: "Tomás Puente", rating: 4.8, price: 125 }
                        ]
                    }
                ],
                "Deportes": [
                    {
                        type: "Entrenador",
                        professionals: [
                            { name: "Javier Díaz Moreno", rating: 4.1, price: 130 },
                            { name: "Clara Jiménez Santos", rating: 4.0, price: 140 },
                            { name: "Adrián Salazar", rating: 4.7, price: 125 },
                            { name: "Noelia Flores", rating: 4.6, price: 135 },
                            { name: "Hugo Cabrera", rating: 4.5, price: 120 },
                            { name: "Lorena Aguilar", rating: 4.8, price: 145 },
                            { name: "Álvaro Hidalgo", rating: 4.3, price: 128 }
                        ]
                    }
                ],
                "Mudanzas": [
                    {
                        type: "Mudanza",
                        professionals: [
                            { name: "Andrés Castro", rating: 4.5, price: 50 },
                            { name: "Patricia Romero", rating: 4.6, price: 55 },
                            { name: "Rubén Gallardo", rating: 4.7, price: 60 },
                            { name: "Lourdes Rincón", rating: 4.4, price: 52 },
                            { name: "Miguel Ponce", rating: 4.8, price: 65 },
                            { name: "Esther Miranda", rating: 4.3, price: 48 },
                            { name: "Jorge Ballesteros", rating: 4.5, price: 58 }
                        ]
                    }
                ],
                "Trámites y gestión": [
                    {
                        type: "Gestor",
                        professionals: [
                            { name: "Fernando Ruiz", rating: 4.7, price: 60 },
                            { name: "Isabel Ortega", rating: 4.8, price: 65 },
                            { name: "Marcos León", rating: 4.5, price: 55 },
                            { name: "Daniela Soto", rating: 4.6, price: 62 },
                            { name: "Vicente Rojas", rating: 4.9, price: 70 },
                            { name: "Ángela Estévez", rating: 4.4, price: 58 },
                            { name: "Felipe Segura", rating: 4.7, price: 64 }
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