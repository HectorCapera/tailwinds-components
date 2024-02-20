import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Header2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [header2, setHeader2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setHeader2(`
      <header class="bg-white shadow-md">
            <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
              <nav class="flex flex-wrap">
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Acerca de
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Servicios
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Contacto
                </a>
              </nav>
              <div class="flex items-center justify-center my-4 md:my-0 ">
                <a href="#" class="text-zinc-600 text-xl font-bold">
                  Tu Logo
                </a>
              </div>
              <button class="btn-login bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transform transition-transform my-4 md:my-0">
                Iniciar Sesión
              </button>
            </div>
          </header>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(header2)
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
      <h2 className="text-3xl mt-4">Cabecera</h2>
      <div className="flex gap-5 mb-10">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <header class="bg-white shadow-md">
            <div class="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
              <nav class="flex flex-wrap">
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Inicio
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Acerca de
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Servicios
                </a>
                <a
                  href="#"
                  class="text-zinc-600 hover:text-zinc-800 mx-2 my-1 md:my-0"
                >
                  Contacto
                </a>
              </nav>
              <div class="flex items-center justify-center my-4 md:my-0 ">
                <a href="#" class="text-zinc-600 text-xl font-bold">
                  Tu Logo
                </a>
              </div>
              <button class="btn-login bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transform transition-transform my-4 md:my-0">
                Iniciar Sesión
              </button>
            </div>
          </header>

          <div class="py-32 bg-gray-400"></div>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{header2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Header2;
