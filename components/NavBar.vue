<template>
    <nav class="text-azul">
        <div class="bg-azul text-white mx-auto flex justify-between items-center px-8 py-4">
            <a href="#" class="text-lg font-bold">Helpy</a>
            <ul class="flex space-x-4">
                <li v-for="link in mainLinks" :key="link.text">
                    <a :href="link.href" class="">{{ link.text }}</a>
                </li>
            </ul>
        </div>
        <div class="container mx-auto flex justify-center mt-5">
            <ul class="flex space-x-4">
                <li v-for="service in services" :key="service.text">
                    <a :href="service.href" class="border border-gris rounded-md p-2 hover:bg-gris">
                        {{ service.text }}
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                mainLinks: [
                    { text: "Home", href: "#" },
                    { text: "Cuenta", href: "#" },
                    { text: "Trabaja con nosotros", href: "#" },
                ],
                services: [
                    { text: "Fontaneria", href: "#" },
                    { text: "Electricidad", href: "#" },
                    { text: "Carpinteria", href: "#" },
                    { text: "Jardineria", href: "#" },
                    { text: "Pintura", href: "#" },
                    { text: "Cerrajeria", href: "#" },
                    { text: "Albañileria", href: "#" },
                ],
            };
        },
    };
</script>