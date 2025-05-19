<template>
    <div v-if="show"
        class="fixed inset-0 bg-transparent bg-opacity-50 overflow-y-auto h-full w-full flex justify-end items-start pt-22 pr-4 z-50"
        @click.self="closeModal">
        <div class="relative p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
            <div class="text-right">
                <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                        </path>
                    </svg>
                </button>
            </div>
            <div class="mt-3 text-center">
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 mb-4">
                    <!-- Placeholder for user icon or initial -->
                    <span class="text-xl font-semibold text-purple-600">A</span>
                </div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">Alex, aquí puedes gestionar tus datos, tus
                    servicios y tu cuenta.</h3>
                <div class="mt-6 px-2 text-left">
                    <!-- Mis servicios -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-2">Mis servicios</h4>
                        <ul>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span>Próximos servicios</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span>Historial</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li class="flex justify-between items-center py-2 hover:bg-gray-50 cursor-pointer">
                                <span>Presupuestos recibidos</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <!-- Mi cuenta -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-2">Mi cuenta</h4>
                        <ul>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span>Datos personales</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li class="flex justify-between items-center py-2 hover:bg-gray-50 cursor-pointer">
                                <span>Cambiar contraseña</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <!-- Pagos -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-2">Pagos</h4>
                        <ul>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span>Métodos de pago</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li class="flex justify-between items-center py-2 hover:bg-gray-50 cursor-pointer">
                                <span>Ver facturas y recibos</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <!-- Mi experiencia -->
                    <div class="mb-6">
                        <h4 class="font-semibold text-gray-800 mb-2">Mi experiencia</h4>
                        <ul>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span>Mis valoraciones</span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li
                                class="flex justify-between items-center py-2 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                                <span class="flex items-center">
                                    Recompensas y créditos
                                    <svg class="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                            <li class="flex justify-between items-center py-2 hover:bg-gray-50 cursor-pointer">
                                <span class="flex items-center">
                                    Cupones disponibles
                                    <svg class="w-4 h-4 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span
                                        class="ml-1 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">1</span>
                                </span>
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M9 5l7 7-7 7"></path>
                                </svg>
                            </li>
                        </ul>
                    </div>

                    <!-- Cerrar sesión -->
                    <div class="mt-8 mb-4">
                        <button
                            class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                            Cerrar sesión
                            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits } from 'vue';

    const props = defineProps({
        show: Boolean
    });

    const emit = defineEmits(['close']);

    const closeModal = () => {
        emit('close');
    };
</script>

<style scoped>
    /* Scoped styles for the modal if needed */
</style>
