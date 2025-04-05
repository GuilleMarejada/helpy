<template>
    <div class="min-h-screen font-sans pb-5">
      <header class="container mx-auto px-4 py-3">
        <div class="flex items-center">
          <div class="flex items-center">
            <div class="text-indigo-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </div>
            <h1 class="text-3xl font-bold ml-2">Helpy</h1>
          </div>
        </div>
      </header>
  
      <main class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <h2 class="text-5xl font-bold leading-tight mb-6">
              Encuentra, reserva y soluciona cualquier tarea en tu hogar.
              <span class="block mt-4">Así de fácil.</span>
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Limpieza, reparaciones, cuidados y más.
              <span class="block">Profesionales de confianza al instante.</span>
            </p>
            <a class="bg-indigo-600 text-white font-medium py-4 px-8 rounded-lg text-lg hover:bg-indigo-700 transition duration-300" href="/client">
              Reserva un servicio ahora
            </a>
          </div>
  
          <div class="lg:w-1/2">
            <img src="/images/limpiadora.PNG" alt="Profesional de limpieza" class="w-full" />
          </div>
        </div>
  
        <div>
          <h3 class="text-3xl font-bold mb-5">Cómo funciona</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="flex flex-col items-center">
              <div class="bg-indigo-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold">Explora servicios</h4>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="bg-indigo-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold">Haz una reserva</h4>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="bg-indigo-600 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
              </div>
              <h4 class="text-xl font-semibold">Soluciona tu tarea</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
   defineOptions({ name: 'IndexPage' })
  </script>