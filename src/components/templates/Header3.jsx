import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Header3 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [header3, setHeader3] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setHeader3(`
      <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <a href="#" className="text-zinc-600 text-xl font-bold mr-4">
                  Tu Logo
                </a>
                <nav className="hidden md:block">
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="ml-2 bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none hidden md:block">
                  Buscar
                </button>
              </div>
            </div>
          </header>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(header3)
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
      <div className="flex gap-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <a href="#" className="text-zinc-600 text-xl font-bold mr-4">
                  Tu Logo
                </a>
                <nav className="hidden md:block">
                  <ul className="flex space-x-4">
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-zinc-600 hover:text-zinc-800">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-blue-500"
                />
                <button className="ml-2 bg-gray-200 text-gray-600 px-3 py-1 rounded-md hover:bg-gray-300 focus:outline-none hidden md:block">
                  Buscar
                </button>
              </div>
            </div>
          </header>

          <div class="py-32 bg-gray-400"></div>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{header3}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Header3;
