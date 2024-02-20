import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Header = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [codigo, setCodigo] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setCodigo(`
      <header className="bg-white shadow-md mt-10">
            <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-zinc-700">
              <div>
                <a href="#" className="text-2xl font-bold px-4">
                  Tu Logo
                </a>
              </div>
              <nav className="space-x-4 flex-grow">
                <a href="#" className="nav-link">
                  Inicio
                </a>
                <a href="#" className="nav-link">
                  Acerca de
                </a>
                <a href="#" className="nav-link">
                  Servicios
                </a>
                <a href="#" className="nav-link">
                  Contacto
                </a>
              </nav>
              <button className="btn-login bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transform transition-transform md:ml-4">
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
      .writeText(codigo)
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
      <h2 className="text-3xl mt-4">Cabecera</h2>
      <div className="flex gap-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <header className="bg-white shadow-md mt-10">
            <div className="container mx-auto py-4 flex flex-col md:flex-row items-center justify-between text-zinc-700">
              <div>
                <a href="#" className="text-2xl font-bold px-4">
                  Tu Logo
                </a>
              </div>
              <nav className="space-x-4 flex-grow">
                <a href="#" className="nav-link">
                  Inicio
                </a>
                <a href="#" className="nav-link">
                  Acerca de
                </a>
                <a href="#" className="nav-link">
                  Servicios
                </a>
                <a href="#" className="nav-link">
                  Contacto
                </a>
              </nav>
              <button className="btn-login bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transform transition-transform md:ml-4">
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
            <code>{codigo}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Header;
