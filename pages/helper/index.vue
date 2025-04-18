<template>
  <div class="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
    <div>
      <div class="mx-auto pb-3 sm:pb-5">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 flex items-center">
              <a href="/"> <img class="w-20 sm:w-28 px-2" src="/images/LogoNormal.jpg" alt="Hero Image">
              </a>
            </div>
            <div class="flex">
              <div class="hidden md:flex items-center space-x-2">
                <a v-for="link in mainLinks" :key="link.text" :href="link.href"
                  class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {{ link.text }}
                </a>
              </div>
              <div class="flex items-center">
                <button
                  class="ml-2 sm:ml-8 inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6C63FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
                  Iniciar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3 sm:gap-5 max-w-full sm:max-w-[800px]">
      <h2 class="font-bold text-2xl sm:text-3xl md:text-4xl">Sé tu propio jefe. Gana dinero ayudando. Súmate a Helpy y
        empieza a trabajar por
        horas como
        profesional
        verificado.
      </h2>
      <p class="text-sm sm:text-base">Alta gratuita. Tú eliges cuánto cobras. Horarios flexibles.</p>
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a href="/client"
          class="px-5 sm:px-8 py-3 sm:py-4 bg-[#6C63FF] text-white font-bold sm:font-extrabold rounded-tl-3xl hover:bg-indigo-700 hover:rounded-br-3xl hover:rounded-tl-none transition-colors shadow-md text-center text-sm sm:text-base">
          Quiero ser Helper
        </a>
        <a href="#como-funciona"
          class="px-4 sm:px-5 py-3 sm:py-4 border border-gray-700 text-gray-700 font-medium rounded-br-3xl hover:rounded-tl-3xl hover:rounded-br-none hover:bg-gray-50 transition-colors text-center text-sm sm:text-base">
          Preguntas frecuentes
        </a>
      </div>
    </div>
    <div>
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
    <div class="py-5 sm:py-8 text-xl sm:text-2xl">
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
  </div>
</template>

<script setup>
  const mainLinks = [
    { text: 'FAQ/Preguntas', href: '/' },
    { text: 'Beneficios', href: '#servicios' },
    { text: 'Planetita', href: '#como-funciona' },
  ];
</script>