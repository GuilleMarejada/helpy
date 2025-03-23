<template>
    <nav class="text-white">
        <div class="  mx-auto flex justify-center font-bold">
            <div class="max-w-[1500px] w-full flex justify-between items-center px-8 py-4"> <a href="#"
                    class="text-lg font-bold">Helpy</a>
                <ul class="flex space-x-4">
                    <li v-for="link in mainLinks" :key="link.text">
                        <a :href="link.href" class="">{{ link.text }}</a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="container font-semibold mx-auto flex justify-center mt-5">
            <ul class="flex space-x-4">
                <li v-for="service in services" :key="service.text">
                    <a :href="service.href"
                        class="border border-gris rounded-md p-2 hover:bg-azul transition duration-300 ease-in-out">
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