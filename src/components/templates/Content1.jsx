import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Content1 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [content1, setContent1] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setContent1(`
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
      .writeText(content1)
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
    <div className="p-10 bg-zinc-800/70 rounded-lg">
      <h2 className="text-3xl mt-4">Píe de página</h2>
      <div className="flex gap-5 mb-10">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
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
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{content1}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Content1;
