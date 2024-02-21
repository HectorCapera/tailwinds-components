import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Testimonial3 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [testimonial3, setTestimonial3] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setTestimonial3(`
      <section class="text-gray-600 body-font  bg-stone-100 rounded-lg">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/302x302"
                    />
                    <p class="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam distinctio amet libero natus consequatur
                      obcaecati ipsam aliquam architecto repudiandae, eveniet
                      consectetur impedit, explicabo praesentium
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Nombre
                    </h2>
                    <p class="text-gray-500">Cargo</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                  <div class="h-full text-center">
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/300x300"
                    />
                    <p class="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusamus ratione distinctio sit exercitationem
                      asperiores. Dolore error blanditiis quos quas voluptatem
                      fugiat voluptas enim tempora, ipsam cumque non vero eum
                      aliquid.
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Nombre
                    </h2>
                    <p class="text-gray-500">Cargo</p>
                  </div>
                </div>
                <div class="lg:w-1/3 lg:mb-0 p-4">
                  <div class="h-full text-center">
                    <img
                      alt="testimonial"
                      class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                      src="https://dummyimage.com/305x305"
                    />
                    <p class="leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti esse, nobis error tempore autem dignissimos
                      recusandae atque nihil maxime hic laborum molestias et
                      quam? Ipsum id quas magnam rem excepturi.
                    </p>
                    <span class="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                      Nombre
                    </h2>
                    <p class="text-gray-500">Cargo</p>
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
      .writeText(testimonial3)
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
      <h2 className="text-3xl mt-4">Testimonio</h2>
      <div className="flex gap-5 mb-10">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="text-gray-600 body-font  bg-stone-100 rounded-lg">
            <div class="container px-5 py-24 mx-auto">
              <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                Testimonios
              </h1>
              <div class="flex flex-wrap -m-4">
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-200 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia nobis ullam maxime quia atque neque quos, beatae
                      hic animi nisi deleniti quaerat error! In incidunt quae
                      porro quis commodi a.
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/106x106"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Nombre
                        </span>
                        <span class="text-gray-500 text-sm">Cargo</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="p-4 md:w-1/2 w-full">
                  <div class="h-full bg-gray-200 p-8 rounded">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="block w-5 h-5 text-gray-400 mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p class="leading-relaxed mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae voluptatum tempora optio tenetur nihil.
                      Doloribus veniam, repudiandae magnam voluptate ipsum
                      dicta, quisquam autem laboriosam itaque.
                    </p>
                    <a class="inline-flex items-center">
                      <img
                        alt="testimonial"
                        src="https://dummyimage.com/107x107"
                        class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      />
                      <span class="flex-grow flex flex-col pl-4">
                        <span class="title-font font-medium text-gray-900">
                          Nombre
                        </span>
                        <span class="text-gray-500 text-sm">Cargo</span>
                      </span>
                    </a>
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
            <code>{testimonial3}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Testimonial3;
