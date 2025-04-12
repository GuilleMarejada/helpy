<template>
  <div class="min-h-screen font-sans">
    <!-- Hero Section con degradado y mejor estructura -->
    <div class="bg-gradient-to-b from-indigo-50 to-white">
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
              <div class="absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full z-0"></div>
              <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full z-0"></div>
              <img src="" alt="Profesional de limpieza" class="w-full relative z-10 rounded-xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección de servicios destacados -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10 text-gray-900">Servicios más solicitados</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <img src="" alt="Limpieza" class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold mb-2">Limpieza del hogar</h3>
            <p class="text-gray-600 mb-4">Mantén tu casa impecable con nuestros expertos en limpieza.</p>
            <button class="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Ver detalles
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <img src="~/public/images/Fontaneria.png" alt="Fontanería"
              class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold mb-2">Fontanería</h3>
            <p class="text-gray-600 mb-4">Reparaciones de fontanería con profesionales experimentados.</p>
            <button class="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Ver detalles
            </button>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105">
            <img src="~/public/images/Electricidad.png" alt="Electricidad"
              class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-xl font-bold mb-2">Electricidad</h3>
            <p class="text-gray-600 mb-4">Soluciona tus problemas eléctricos con expertos certificados.</p>
            <button class="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cómo Funciona section -->
    <div id="como-funciona" class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Cómo funciona</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div class="flex flex-col items-center bg-white p-8 rounded-xl shadow-md">
            <div class="bg-indigo-100 rounded-full p-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Explora servicios</h3>
            <p class="text-gray-600 text-center">Encuentra el servicio que necesitas entre nuestra amplia selección de
              profesionales verificados.</p>
          </div>

          <div class="flex flex-col items-center bg-white p-8 rounded-xl shadow-md">
            <div class="bg-indigo-100 rounded-full p-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Haz una reserva</h3>
            <p class="text-gray-600 text-center">Selecciona fecha, hora y el profesional que prefieras. Paga de forma
              segura.</p>
          </div>

          <div class="flex flex-col items-center bg-white p-8 rounded-xl shadow-md">
            <div class="bg-indigo-100 rounded-full p-4 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-600" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Soluciona tu tarea</h3>
            <p class="text-gray-600 text-center">Recibe al profesional en tu hogar y disfruta de un servicio de calidad.
              Valora tu experiencia.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonios -->
    <div class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900">Lo que dicen nuestros clientes</h2>

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