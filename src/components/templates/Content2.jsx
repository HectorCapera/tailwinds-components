import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Content2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [content2, setContent2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setContent2(`
      <section class="px-4 py-24 mx-auto max-w-7xl bg-stone-100">
            <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div>
                <h2 class="mb-4 text-2xl  tracking-tight text-center text-black md:leading-tight sm:text-left sm:text-3xl font-medium md:text-4xl">
                  Clear overview for efficient tracking
                </h2>
                <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                  Handle your subscriptions and transactions efficiently with
                  the clear overview in Dashboard. Features like the smart
                  search option allow you to quickly find any data you’re
                  looking for.
                </p>
                <a
                  href="#"
                  class="w-full btn btn-dark btn-lg sm:w-auto text-blue-500"
                >
                  Learn More
                </a>
              </div>
              <div class="w-full h-full py-48 bg-gray-200"></div>
            </div>
            <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div class="order-none md:order-2">
                <h2 class="mb-4 text-2xl tracking-tight text-center text-black md:leading-tight sm:text-left sm:text-3xl font-medium md:text-4xl  ">
                  Decide how you integrate Payments
                </h2>
                <p class="mb-5  text-center text-gray-600 sm:text-left md:text-lg leading-relaxed text-base ">
                  Love to code? Next to our ready-made and free plugins you can
                  use our expansive yet simple API; decide how you integrate
                  Payments and build advanced and reliable products yourself
                  from scratch.
                </p>
                <a
                  href="#"
                  class="w-full btn btn-dark btn-lg sm:w-auto  text-blue-500"
                >
                  Learn More
                </a>
              </div>
              <div class="w-full h-full py-48 bg-gray-200"></div>
            </div>
          </section>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(content2)
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
      <h2 className="text-3xl mt-4">Contenido</h2>
      <div className="flex gap-5  mb-10">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <section class="px-4 py-24 mx-auto max-w-7xl bg-stone-100">
            <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div>
                <h2 class="mb-4 text-2xl  tracking-tight text-center text-black md:leading-tight sm:text-left sm:text-3xl font-medium md:text-4xl">
                  Clear overview for efficient tracking
                </h2>
                <p class="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
                  Handle your subscriptions and transactions efficiently with
                  the clear overview in Dashboard. Features like the smart
                  search option allow you to quickly find any data you’re
                  looking for.
                </p>
                <a
                  href="#"
                  class="w-full btn btn-dark btn-lg sm:w-auto text-blue-500"
                >
                  Learn More
                </a>
              </div>
              <div class="w-full h-full py-48 bg-gray-200"></div>
            </div>
            <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
              <div class="order-none md:order-2">
                <h2 class="mb-4 text-2xl tracking-tight text-center text-black md:leading-tight sm:text-left sm:text-3xl font-medium md:text-4xl  ">
                  Decide how you integrate Payments
                </h2>
                <p class="mb-5  text-center text-gray-600 sm:text-left md:text-lg leading-relaxed text-base ">
                  Love to code? Next to our ready-made and free plugins you can
                  use our expansive yet simple API; decide how you integrate
                  Payments and build advanced and reliable products yourself
                  from scratch.
                </p>
                <a
                  href="#"
                  class="w-full btn btn-dark btn-lg sm:w-auto  text-blue-500"
                >
                  Learn More
                </a>
              </div>
              <div class="w-full h-full py-48 bg-gray-200"></div>
            </div>
          </section>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{content2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Content2;
