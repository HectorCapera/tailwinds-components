import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Testimonial1 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [testimonial1, setTestimonial1] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setTestimonial1(`
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
      .writeText(testimonial1)
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
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{testimonial1}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Testimonial1;
