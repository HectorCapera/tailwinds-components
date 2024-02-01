const IconoTailwind = () => {
  return (
    <section class="z-10">
      <div class=" flex flex-col justify-center items-center mt-10">
        <img
          src="/tailwindcss.svg"
          alt="tailwind Icon"
          class="w-22 h-20 mt-10"
        />
      </div>
      <div class="relative items-center w-full px-5 py-5 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-5">
        <div class="flex w-full mx-auto text-left">
          <div class="relative inline-flex items-center mx-auto align-middle">
            <div class="text-center">
              <h1 class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-300 md:text-5xl lg:text-6xl lg:max-w-7xl">
                Componentes estilizados <br class="hidden lg:block" />a través
                de Tailwind CSS
              </h1>
              <p class="max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-400">
                Implementa componentes estilizados con Tailwind CSS
                completamente gratis. Además, conoce otras herramientas útiles
                para el desarrollo.
              </p>
              <div class="flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6">
                <div class="mt-3 rounded-lg sm:mt-0">
                  <button class="px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Descubre los estilos
                  </button>
                </div>
                <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                  <button class="items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Conoce más herramientas
                  </button>
                </div>
              </div>

              <div class="max-w-xl mx-auto mt-14 text-base leading-relaxed text-gray-400">
                <h2>Desarrollado con </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconoTailwind;

// Path: src/components/Icono.jsx
