import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Gallery2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [gallery2, setGallery2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setGallery2(`
      <section class="text-gray-600 body-font bg-stone-100 rounded-lg ">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Título de la galería
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  ipsam eum amet, odio maxime natus nihil at nisi quos
                  perspiciatis laborum rerum, atque deserunt repellat id
                  similique minima veniam dolore!
                </p>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/600x360"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/601x361"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/603x363"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/602x362"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/605x365"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/606x366"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
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
      .writeText(gallery2)
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
      <h2 className="text-3xl mt-4">Galería</h2>
      <div className="flex gap-5 mb-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="text-gray-600 body-font bg-stone-100 rounded-lg ">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                  Título de la galería
                </h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  ipsam eum amet, odio maxime natus nihil at nisi quos
                  perspiciatis laborum rerum, atque deserunt repellat id
                  similique minima veniam dolore!
                </p>
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/600x360"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/601x361"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/603x363"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/602x362"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/605x365"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 sm:w-1/2 p-4">
                  <div class="flex relative">
                    <img
                      alt="gallery"
                      class="absolute inset-0 w-full h-full object-cover object-center"
                      src="https://dummyimage.com/606x366"
                    />
                    <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                      <h2 class="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                        Subtitulo
                      </h2>
                      <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                        Subtitulo 2
                      </h1>
                      <p class="leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
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
            <code>{gallery2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Gallery2;
