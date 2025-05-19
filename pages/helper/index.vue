<template>
  <div class="">
    <div>
      <div class="flex bg-white p-2 px-8 w-screen justify-between items-center sticky top-0 z-50 shadow-md">
        <div class="flex-shrink-0 flex items-center">
          <a href="/"> <img class="w-28 px-2" src="/images/LogoNormal1.webp" alt="Hero Image">
          </a>
        </div>
        <div class="flex items-center">
          <a class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-md font-medium transition-colors">
            FAQ/Preguntas</a>
          <a href="/helper"
            class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-md font-medium transition-colors">Beneficios</a>
          <img class="w-20 px-2 cursor-pointer" src="/images/Idioma12.webp" alt="">
          <button @click="showLoginModal = true"
            class="h-fit inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6C63FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors cursor-pointer">
            Iniciar sesión
          </button>
        </div>

      </div>
      <ModalLogin :show="showLoginModal" @close="showLoginModal = false" />
    </div>
    <div class="flex justify-center px-4 sm:px-8 py-10 bg-[#F5F5F5]">
      <div class="flex flex-col gap-3 sm:gap-5 max-w-full sm:max-w-[800px]">
        <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl"><span class="text-[#6C63FF]">Sé tu propio jefe.</span>
          Gana dinero ayudando. Súmate a Helpy y
          empieza a trabajar por
          horas como
          profesional
          verificado.
        </h2>
        <p class="text-sm sm:text-base">Alta gratuita. Tú eliges cuánto cobras. Horarios flexibles.</p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a href="/client"
            class="px-5 sm:px-8 py-2 bg-[#6C63FF] text-white font-bold sm:font-extrabold rounded-tl-3xl hover:bg-indigo-700 hover:rounded-br-3xl hover:rounded-tl-none transition-colors shadow-md text-center text-sm sm:text-base">
            Quiero ser Helper
          </a>
          <a href="#como-funciona"
            class="px-4 sm:px-5 py-2 border border-gray-700 text-gray-700 font-medium rounded-br-3xl hover:rounded-tl-3xl hover:rounded-br-none hover:bg-gray-50 transition-colors text-center text-sm sm:text-base">
            Preguntas frecuentes
          </a>
        </div>
      </div>
      <img src="/images/GruepoHelper.svg" alt="" class="hidden sm:block w-full max-w-[250px] h-auto object-cover">
    </div>

    <div class="px-4 sm:px-8 py-10 mx-auto">
      <h2 class="py-5 sm:py-8 text-xl sm:text-2xl">¿Qué es <span class="font-extrabold">Helpy</span> y
        cómo funciona para tí?
      </h2>
      <div class="mt-4 sm:mt-6">
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
          <li class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all hover:scale-105">
            <div class="flex flex-col items-center">
              <div class="relative mb-3 sm:mb-4 w-full flex justify-center">
                <div
                  class="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  1</div>
                <img src="/images/1.svg" alt="Crear perfil" class="rounded-lg sm:h-40 object-cover">
              </div>
              <h3 class="text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2"><span class="font-bold">Crea</span> tu perfil
              </h3>
              <p class="text-gray-600 text-center text-sm sm:text-base">Súmate gratis. Cuéntanos qué sabes hacer y
                completa tu perfil en solo
                unos minutos.
              </p>
            </div>
          </li>

          <li class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all hover:scale-105">
            <div class="flex flex-col items-center">
              <div class="relative mb-3 sm:mb-4 w-full flex justify-center">
                <div
                  class="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  2</div>
                <img src="/images/2.svg" alt="Establecer precio" class="rounded-lg sm:h-40 object-cover ">
              </div>
              <h3 class="text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2"><span class="font-bold">Elige</span> cuánto
                cobras</h3>
              <p class="text-gray-600 text-center text-sm sm:text-base">Tú decides tu tarifa por hora. Nosotros te
                ayudamos a poner un
                precio competitivo.
              </p>
            </div>
          </li>

          <li class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all hover:scale-105">
            <div class="flex flex-col items-center">
              <div class="relative mb-3 sm:mb-4 w-full flex justify-center">
                <div
                  class="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  3</div>
                <img src="/images/3.svg" alt="Recibir solicitudes" class="rounded-lg sm:h-40 object-cover ">
              </div>
              <h3 class="text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2">Recibe <span
                  class="font-bold">solicitudes</span></h3>
              <p class="text-gray-600 text-center text-sm sm:text-base">Los clientes te eligen. Acepta solo los trabajos
                que quieras hacer.
                Mantén actualizado tu calendario.
              </p>
            </div>
          </li>

          <li class="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all hover:scale-105">
            <div class="flex flex-col items-center">
              <div class="relative mb-3 sm:mb-4 w-full flex justify-center">
                <div
                  class="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 bg-[#6C63FF] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  4</div>
                <img src="/images/4.svg" alt="Cobrar" class="rounded-lg sm:h-40 object-cover ">
              </div>
              <h3 class="text-lg sm:text-xl text-gray-800 mb-1 sm:mb-2">Trabaja y <span class="font-bold">cobra
                  fácil</span></h3>
              <p class="text-gray-600 text-center text-sm sm:text-base">Cada servicio queda registrado y cotizado.
                Nosotros nos encargamos
                del cobro, tú solo trabaja tranquilo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="p-5 sm:py-8 text-xl sm:text-2xl">
      <h3>¿Por qué unirte a <span class="font-extrabold">Helpy</span>?</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/a.svg" alt="Imagen 1" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Gana dinero haciendo lo que sabes</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/b.svg" alt="Imagen 2" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Horarios flexibles, tú eliges</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/c.svg" alt="Imagen 3" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Trabaja cerca de ti</p>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/d.svg" alt="Imagen 4" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Todo en regla sin complicaciones
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/e.svg" alt="Imagen 5" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Contrataciones recurrentes.
              Ingresos estables</p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-4 flex items-center transition-all hover:shadow-lg">
          <img src="/images/f.svg" alt="Imagen 6" class="w-fit h-16 mr-4 object-cover rounded-lg">
          <div class="text-left">
            <p class="text-gray-600 text-base">Te ayudamos a mejorar tu perfil profesional</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto p-4 pb-24">
      <h2 class="text-3xl font-bold text-gray-900 border-b-2 border-gray-200 pb-6 mb-8">
        Preguntas frecuentes de nuevos Helpers </h2>
      <div>
        <div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Cuánto cuesta registrarse en Helpy? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Tengo que ser autónomo para trabajar en Helpy? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Cuándo y cómo se cobra? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Puedo rechazar trabajos si no me interesan? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Qué pasa si un cliente cancela o hay un problema? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Puedo tener trabajos fijos o clientes recurrentes? <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Puedo cancelar o cambiar la cita una vez reservada?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Tienes más dudas? Escríbenos y te respondemos en menos de 24h. <span
                class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>

        </div>
      </div>
    </div>
    <footer class="bg-gray-900 text-white py-10">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">Helpy<span class="text-indigo-400">.</span></h3>
            <p class="text-gray-400">Tu plataforma de confianza para servicios profesionales en el hogar.</p>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Enlaces</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Sobre nosotros</a></li>
              <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Contacto</h4>
            <p class="text-gray-400 mb-2">XXX@XXX.com</p>
            <p class="text-gray-400">+34 XXX XXX XXX</p>
          </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} Helpy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ModalLogin from '~/components/ModalLogin.vue';

  defineOptions({ name: 'IndexPage' });

  const showLoginModal = ref(false);
</script>