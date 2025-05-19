<template>
  <div class="container flex flex-col justify-center items-center mx-auto">
    <NavBar />
    <ComoFunciona />

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
</template>