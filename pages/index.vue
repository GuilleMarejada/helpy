<template>
  <div class="min-h-screen font-sans">
    <!-- Hero Section con degradado y mejor estructura -->
    <div class="bg-white">
      <div class="container mx-auto px-4 py-16 md:py-24">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="lg:w-1/2">
            <h1 class="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
              Encuentra, reserva y <span class="text-indigo-600">soluciona</span> cualquier tarea en tu hogar.
            </h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Limpieza, reparaciones, cuidados y más.
              Profesionales verificados disponibles cuando los necesitas.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="/client"
                class="px-8 py-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md text-center">
                Reserva un servicio
              </a>
              <a href="#como-funciona"
                class="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center">
                Cómo funciona
              </a>
            </div>
          </div>

          <div class="lg:w-1/2">
            <div class="relative">
              <img src="/images/FrontPage.JPG" alt="Imagen Portada" class="w-full relative z-10 rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Cómo Funciona section -->
    <div id="como-funciona" class="py-16 bg-gray-50">
      <img src="/images/why.JPG" alt="">
    </div>

    <!-- Sección de servicios destacados -->
    <div class="py-20 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-3">Servicios más solicitados</h2>
          <p class="text-gray-600 text-xl max-w-3xl mx-auto">Profesionales cualificados listos para ayudarte con
            cualquier necesidad en tu hogar</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 h-fit">
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="h-80 overflow-hidden">
              <img src="/images/limpiadora.jpg" alt="Limpieza"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Limpieza del hogar</h3>
              <p class="text-gray-600 mb-5">Mantén tu casa impecable con nuestros expertos en limpieza profesional.</p>
              <button
                class="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
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
            <div class="h-80 overflow-hidden">
              <img src="/images/Fontanero.jpg" alt="Fontanería"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Fontanería</h3>
              <p class="text-gray-600 mb-5">Reparaciones y mantenimiento de fontanería con profesionales experimentados.
              </p>
              <button
                class="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
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
            <div class="h-80 overflow-hidden">
              <img src="/images/Electricista.jpg" alt="Electricidad"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-110 object-top" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 text-gray-800">Electricidad</h3>
              <p class="text-gray-600 mb-5">Soluciona tus problemas eléctricos con expertos certificados y garantía de
                calidad.</p>
              <button
                class="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2">
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
    <div class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div class="lg:w-1/2">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Descarga nuestra aplicación</h2>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Gestiona tus reservas, contacta con profesionales y recibe notificaciones en tiempo real desde tu
              dispositivo móvil.
            </p>
            <div class="flex flex-row gap-4">
              <button
                class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                App Store
              </button>
              <button
                class="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
          <div class="lg:w-1/2 mt-8 lg:mt-0">
            <div class="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img class="w-full h-full object-cover" src="/images/APP.jpg" alt="Aplicación">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonios -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-gray-900">Lo que dicen nuestros clientes</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-50 p-6 rounded-xl shadow-md">
            <div class="flex items-center mb-4">
              <div
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
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
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
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
                class="h-12 w-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
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
            <p class="text-gray-400 mb-2">info@helpy.com</p>
            <p class="text-gray-400">+34 912 345 678</p>
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
  defineOptions({ name: 'IndexPage' })
</script>