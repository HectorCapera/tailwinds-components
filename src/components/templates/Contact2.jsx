import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Contact2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [contact2, setContact2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setContact2(`
      <section class="text-slate-800 body-font bg-stone-100">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h2 class="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
                  Lorem ipsum dolor sit amet
                </h2>
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4">
                  Amet consectetur adipisicing elit.
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
                  provident excepturi cum incidunt, tempore voluptatum odit
                  velit! Qui est temporibus atque earum ad praesentium iste
                  perferendis! Quis cum reiciendis vel.
                </p>
              </div>
              <div class="flex flex-wrap">
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                    Id quasi veritatis
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quam beatae, velit ducimus.
                  </p>
                  <a class="text-blue-500  inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                    The Catalyzer
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quam beatae, velit ducimus.
                  </p>
                  <a class="text-blue-500  inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                    Neptune
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quam beatae, velit ducimus.
                  </p>
                  <a class="text-blue-500 inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-700 border-opacity-60">
                  <h2 class="text-lg sm:text-xl text-gray-800 font-medium title-font mb-2">
                    Melanchole
                  </h2>
                  <p class="leading-relaxed text-base mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quam beatae, velit ducimus.
                  </p>
                  <a class="text-blue-500  inline-flex items-center">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-700 rounded text-lg">
                Button
              </button>
            </div>
          </section>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(contact2)
      .then(() => {
        toast.success("Código copiado al portapapeles", {
          duration: 3000,
          position: "top-right",
        });
      })
      .catch((error) => {
        toast.error("Error al copiar el código al portapapeles");
        // console.error("Error al copiar el código al portapapeles:", error);
      });
  };

  return (
    <div className="p-10 bg-zinc-900/70 rounded-lg">
      <h2 className="text-3xl mt-4">Píe de página</h2>
      <div className="flex gap-5 mb-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="text-gray-600 body-font relative">
            <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  class="absolute inset-0"
                  frameborder="0"
                  title="map"
                  marginheight="0"
                  marginwidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                ></iframe>
                <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div class="lg:w-1/2 px-6">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      Dirección
                    </h2>
                    <p class="mt-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia dolores.
                    </p>
                  </div>
                  <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      Email
                    </h2>
                    <a class="text-indigo-500 leading-relaxed">
                      ejemplo@email.com
                    </a>
                    <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                      Móvil
                    </h2>
                    <p class="leading-relaxed">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-5">
                <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
                  Contacto
                </h2>
                <p class="leading-relaxed mb-5 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div class="relative mb-4">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div class="relative mb-4">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Botón
                </button>
                <p class="text-xs text-gray-500 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{contact2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Contact2;
