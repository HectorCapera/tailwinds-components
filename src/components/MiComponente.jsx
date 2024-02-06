import React, { useState } from "react";

const MiComponente = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [codigo, setCodigo] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setCodigo(`
        <header class="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
          <div class="container mx-auto py-4 flex items-center justify-between">
              <div>
                <a href="#" class="text-2xl font-bold px-4">
                  Tu Logo
                </a>
              </div>
              <nav class="space-x-4">
                <a href="#" class="nav-link">
                  Inicio
                </a>
                <a href="#" class="nav-link">
                  Acerca de
                </a>
                <a href="#" class="nav-link">
                  Servicios
                </a>
                <a href="#" class="nav-link">
                  Contacto
                </a>
              </nav>
              <button class="btn-login bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transform transition-transform mr-4">
                Iniciar Sesión
              </button>
          </div>
        </header>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    const textarea = document.createElement("textarea");
    textarea.value = codigo;

    // Añadir el textarea al DOM
    document.body.appendChild(textarea);

    // Seleccionar y copiar el contenido del textarea
    textarea.select();
    document.execCommand("copy");

    // Eliminar el textarea del DOM
    document.body.removeChild(textarea);

    alert("Código copiado al portapapeles");
  };

  return (
    <div className="p-10 bg-zinc-800/70">
      <h2 className="text-3xl mt-4">Cabecera</h2>
      <div className="flex gap-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <header className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md">
            <div className="container mx-auto py-4 flex items-center justify-between">
              <div>
                <a href="#" className="text-2xl font-bold px-4">
                  Tu Logo
                </a>
              </div>
              <nav className="space-x-4">
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
              <button className="btn-login bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100 transform transition-transform mr-4">
                Iniciar Sesión
              </button>
            </div>
          </header>
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
    </div>
  );
};

export default MiComponente;
