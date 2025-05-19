<template>
  <div class="min-h-screen">
    <!-- Hero Section con degradado y mejor estructura -->
    <div class="flex bg-white p-2 px-8 w-screen justify-between items-center sticky top-0 z-50 shadow-md">
      <div class="flex-shrink-0 flex items-center">
        <a href="/"> <img class="w-28 px-2" src="/images/LogoNormal1.webp" alt="Hero Image">
        </a>
      </div>
      <div class="flex items-center">
        <a class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-md font-medium transition-colors">
          FAQ/Preguntas</a>
        <a href="/helper"
          class="text-gray-700 hover:text-[#6C63FF] px-3 py-2 rounded-md text-md font-medium transition-colors">Ofrece
          tus servicios</a>
        <img class="w-20 px-2 cursor-pointer" src="/images/Idioma12.webp" alt="">
        <button @click="showLoginModal = true"
          class="h-fit inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6C63FF] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors cursor-pointer">
          Iniciar sesión
        </button>
      </div>
    </div>
    <ModalLogin :show="showLoginModal" @close="showLoginModal = false" />

    <div class="container mx-auto px-24 py-4">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-4 px-8">
        <div class="lg:w-1/2">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            Encuentra, reserva y <span class="text-[#6C63FF]">soluciona</span> cualquier tarea en tu hogar.
          </h1>
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Limpieza, reparaciones, cuidados y más.
            Profesionales verificados disponibles cuando los necesitas.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="/client"
              class="px-5 sm:px-8 py-2 bg-[#6C63FF] text-white font-bold sm:font-extrabold rounded-tl-3xl hover:bg-indigo-700 hover:rounded-br-3xl hover:rounded-tl-none transition-colors shadow-md text-center text-sm sm:text-base">
              Reserva un servicio
            </a>
            <a href="#como-funciona"
              class="px-4 sm:px-5 py-2 border border-gray-700 text-gray-700 font-medium rounded-br-3xl hover:rounded-tl-3xl hover:rounded-br-none hover:bg-gray-50 transition-colors text-center text-sm sm:text-base">
              Preguntas frecuentes
            </a>
          </div>
        </div>

        <div class="lg:w-1/2">
          <img src="/images/Grupo1a.svg" alt="Imagen Portada" class="w-full  z-10" />
        </div>
      </div>
    </div>
    <!-- Cómo Funciona section -->
    <div class="mt-16 px-4">
      <h2 class="text-2xl text-gray-800 mb-6">¿Por qué elegir <span class="font-bold">Helpy?</span></h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <li class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div class="flex flex-col items-center">
            <img class="h-48" src="/images/1a.svg" alt="">
            <h3 class="text-xl text-gray-800 mb-2 text-center"><span class="font-bold">Precio claro</span>
              , desde el principio</h3>
            <p class="text-gray-600 text-center">Verás el precio final por hora antes de reservar y el precio medio del
              mercado como referencia.
              Pagas solo por el tiempo que necesitas.
              Sin sorpresas.</p>
          </div>
        </li>

        <li class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div class="flex flex-col items-center">
            <img class="h-48" src="/images/2a.svg" alt="">

            <h3 class="text-xl text-gray-800 mb-2">Helpers <span class="font-bold">verificados</span>
            </h3>
            <p class="text-gray-600 text-center">Solo mostramos profesionales aprobados manualmente por nuestro
              equipo.
              Valoramos compromiso, calidad y respuesta.
              Tú eliges según valoraciones y precio.</p>
          </div>
        </li>

        <li class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div class="flex flex-col items-center">
            <img class="h-48" src="/images/3a.svg" alt="">
            <h3 class="text-xl text-gray-800 mb-2 text-center">Todo desde la app, <span class="font-bold">sin
                complicaciones</span>
            </h3>
            <p class="text-gray-600 text-center">Reserva y paga desde tu móvil en segundos.
              Tras confirmar, puedes chatear con tu Helper si tienes dudas. Todo queda registrado y controlado.</p>
          </div>
        </li>

        <li class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
          <div class="flex flex-col items-center">
            <img class="h-48" src="/images/4a.svg" alt="">
            <h3 class="text-xl text-gray-800 mb-2 text-center">Todo claro, <span class="font-bold">todo en regla</span>
            </h3>
            <p class="text-gray-600 text-center">Nos encargamos de que todo esté en orden:
              Helpers dados de alta y cotizando.
              Tú no gestionas nada.
              Fácil para ti, justo para ellos.</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Sección de servicios destacados -->
    <div class="py-20 bg-gray-50">
      <div class="mb-12 px-4">
        <h2 class="text-2xl text-gray-900 mb-3">Servicios <span class="font-bold">más solicitados</span></h2>
        <p class="text-gray-600 text-xl">Profesionales cualificados listos para ayudarte con
          cualquier necesidad en tu hogar</p>
      </div>
      <div class="container mx-auto px-4">


        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 h-fit">
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="max-h-[550px] h-full overflow-hidden">
              <img src="/images/Limpiadora.svg" alt="Limpieza"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top pt-8" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Limpieza del hogar</h3>
              <p class="text-gray-600 mb-5">Mantén tu casa impecable con nuestros expertos en limpieza profesional.</p>
              <button
                class="w-full py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
                Ver detalles
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="max-h-[550px] overflow-hidden">
              <img src="/images/Fontanero.svg" alt="Fontanería"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Fontanería</h3>
              <p class="text-gray-600 mb-5">Reparaciones y mantenimiento de fontanería con profesionales experimentados.
              </p>
              <button
                class="w-full py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
                Ver detalles
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="max-h-[550px] overflow-hidden">
              <img src="/images/Electricista.svg" alt="Electricidad"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Electricidad</h3>
              <p class="text-gray-600 mb-5">Soluciona tus problemas eléctricos con expertos certificados y garantía de
                calidad.</p>
              <button
                class="w-full py-3 bg-[#6C63FF] text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
                Ver detalles
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección APP -->
    <div class="w-full mx-auto px-96 bg-gray-50">
      <!-- Top Section: Title, Subtitle, App Buttons -->
      <div class="flex flex-col md:flex-row items-center mb-16">
        <img src="/images/mujerapp1.svg" alt="App Mockup" class="w-1/2 h-74 rounded-lg mx-auto" />
        <div class="pt-16 md:pl-12 text-center md:text-left">
          <h2 class="text-4xl font-bold text-gray-900 pb-4">Todo lo que necesitas para tu hogar, en tu bolsillo.</h2>
          <p class="text-gray-600 text-xl ">Contratar un manitas, una canguro o un fontanero... nunca fue tan fácil.
          </p>
          <div class="flex justify-center md:justify-start space-x-4">
            <a href="#" class="hover:opacity-75 transition-opacity">
              <img src="/images/appstore.svg" alt="Download on the App Store" class="w-48  h-fit" />
            </a>
            <a href="#" class="hover:opacity-75 transition-opacity">
              <img src="/images/google.svg" alt="Get it on Google Play" class="w-48 h-fit" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- FAQ Section -->
    <div class="container mx-auto p-4 bg-white">
      <h2 class="text-3xl  text-gray-900 border-b-2 border-gray-200 pb-6 mb-8">
        <span class="font-bold">Preguntas frecuentes</span> de nuevos clientes
      </h2>
      <div>
        <div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Cómo funciona?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Cuánto tiempo debo contratar?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Qué pasa si sobra o falta tiempo?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              No estaré en casa durante el servicio
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              Alta en la Seguridad Social
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Qué pasa si el Helper no se presenta o llega tarde?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
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
              ¿Cómo se realiza el pago? ¿Es seguro?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
          <div class="py-1">
            <h3
              class="text-lg font-semibold text-gray-800 flex items-center justify-between cursor-pointer hover:text-[#6C63FF] hover:underline">
              ¿Qué hago si no estoy satisfecho con el servicio?
              <span class="text-gray-800 transform transition-transform duration-300">&#9654;</span>
            </h3>
          </div>
        </div>
      </div>
    </div>



    <!-- Testimonios -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl mb-12 text-gray-900 border-b-2 border-gray-200">Lo que dicen <span class="font-bold">
            nuestros
            clientes</span></h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-[#6C63FF] font-bold text-xl">
                M
              </div>
              <div class="ml-4">
                <h4 class="font-semibold">María G.</h4>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">"El servicio de limpieza superó mis expectativas. La profesional fue puntual,
              eficiente y dejó mi casa impecable. Sin duda repetiré."</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-[#6C63FF] font-bold text-xl">
                J
              </div>
              <div class="ml-4">
                <h4 class="font-semibold">Javier P.</h4>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">"Contraté un fontanero para una urgencia y en menos de 2 horas ya estaba en mi
              casa. Solucionó el problema rápidamente y a un precio muy razonable."</p>
          </div>

          <div class="bg-gray-50 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-[#6C63FF] font-bold text-xl">
                L
              </div>
              <div class="ml-4">
                <h4 class="font-semibold">Laura M.</h4>
                <div class="flex text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-gray-600">"La aplicación es muy intuitiva y el proceso de reserva es sencillo. El
              electricista que vino conocía su trabajo y resolvió mi problema en minutos."</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer simple -->
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