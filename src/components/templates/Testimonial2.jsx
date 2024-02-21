import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Testimonial2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [testimonial2, setTestimonial2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setTestimonial2(`
      <section class="px-4 py-24 mx-auto max-w-7xl bg-stone-100 rounded-lg">
            <div class="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
              <h1 class="mb-10 text-2xl font-extrabold text-gray-900 md:leading-tight md:text-3xl">
                “Genera un diseño moderno de los
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                  Testimonios de tus clientes
                </span>{" "}
                para afianzar tu negocio o producto”
              </h1>
              <div class="mx-auto mb-3  avatar">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
              </div>
              <p class="text-base font-bold text-gray-900">Nombre</p>
              <p class="text-sm font-medium text-gray-900">Cargo</p>
            </div>
          </section>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(testimonial2)
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
      <h2 className="text-3xl mt-4">Testimonio</h2>
      <div className="flex gap-5 mb-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="px-4 py-24 mx-auto max-w-7xl bg-stone-100 rounded-lg">
            <div class="w-full mx-auto text-center md:w-4/5 lg:w-3/5">
              <h1 class="mb-10 text-2xl font-extrabold text-gray-900 md:leading-tight md:text-3xl">
                “Genera un diseño moderno de los
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500">
                  Testimonios de tus clientes
                </span>{" "}
                para afianzar tu negocio o producto”
              </h1>
              <div class="mx-auto mb-3  avatar">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://dummyimage.com/302x302"
                />
              </div>
              <p class="text-base font-bold text-gray-900">Nombre</p>
              <p class="text-sm font-medium text-gray-900">Cargo</p>
            </div>
          </section>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{testimonial2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Testimonial2;
