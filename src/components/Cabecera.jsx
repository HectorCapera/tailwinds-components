import React, { useState } from "react";

import CodeContainer from "./CodeContainer";

const Header = () => (
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
);

const HeaderApp = () => {
  const [showCode, setShowCode] = useState(false);

  const handleShowCode = () => {
    setShowCode(true);
    console.log("mostrar codigo");
  };

  const codeToCopy = `
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
  `;

  return (
    <div>
      {!showCode && <Header />}
      {showCode && <CodeContainer codeToCopy={codeToCopy} />}
      <button
        onClick={() => {
          console.log("Botón clicado");
          handleShowCode();
        }}
      >
        Mostrar Código
      </button>
    </div>
  );
};

export default HeaderApp;
