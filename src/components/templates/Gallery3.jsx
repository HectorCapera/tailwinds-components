import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Gallery3 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [gallery3, setGallery3] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setGallery3(`
      <section class="text-gray-600 body-font bg-stone-100 rounded-lg">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                <div class="sm:w-1/2 mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/1201x501"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Título de imagen
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatibus rem praesentium porro
                  </p>
                  <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                    Botón
                  </button>
                </div>
                <div class="sm:w-1/2 mb-10 px-4">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img
                      alt="content"
                      class="object-cover object-center h-full w-full"
                      src="https://dummyimage.com/1202x502"
                    />
                  </div>
                  <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                    Título de imagen
                  </h2>
                  <p class="leading-relaxed text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam voluptatibus rem praesentium porro
                  </p>
                  <button class="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
                    Botón
                  </button>
                </div>
              </div>
            </div>
          </section>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(gallery3)
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
      <h2 className="text-3xl mt-4">Galería</h2>
      <div className="flex gap-5 mb-10">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="text-gray-600 body-font bg-stone-100 rounded-lg">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="lg:w-2/3 mx-auto">
                <div class="flex flex-wrap w-full bg-gray-300 py-32 px-10 relative mb-4">
                  <img
                    alt="gallery"
                    class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                    src="https://dummyimage.com/820x340"
                  />
                  <div class="text-center relative z-10 w-full">
                    <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">
                      Título de la imagen
                    </h2>
                    <p class="leading-relaxed">lorem ipsum dolore</p>
                    <a class="mt-3 text-blue-500 inline-flex items-center">
                      Saber más
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
                <div class="flex flex-wrap -mx-2">
                  <div class="px-2 w-1/2">
                    <div class="flex flex-wrap w-full bg-gray-300 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src="https://dummyimage.com/542x460"
                      />
                      <div class="text-center relative z-10 w-full">
                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                          Título de la imagen
                        </h2>
                        <p class="leading-relaxed">lorem ipsum dolore</p>
                        <a class="mt-3 text-blue-500 inline-flex items-center">
                          Saber más
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
                  </div>
                  <div class="px-2 w-1/2">
                    <div class="flex flex-wrap w-full bg-gray-300 sm:py-24 py-16 sm:px-10 px-6 relative">
                      <img
                        alt="gallery"
                        class="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
                        src="https://dummyimage.com/542x420"
                      />
                      <div class="text-center relative z-10 w-full">
                        <h2 class="text-xl text-gray-900 font-medium title-font mb-2">
                          Título de la imagen
                        </h2>
                        <p class="leading-relaxed">lorem ipsum dolore</p>
                        <a class="mt-3 text-blue-500 inline-flex items-center">
                          Saber más
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{gallery3}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Gallery3;
