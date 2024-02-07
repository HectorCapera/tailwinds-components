import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Footer2 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [footer2, setFooter2] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setFooter(`
      <footer class="bg-slate-200 text-zinc-700 py-8">
            <div class="container mx-auto px-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Enlaces</h3>
                  <ul class="space-y-2">
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Redes Sociales</h3>
                  <ul class=" space-y-2">
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex  items-end">
                  <p class="text-sm ">
                    &copy; 2024 Tu Empresa. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(footer2)
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
    <div className="p-10 bg-zinc-800/70">
      <h2 className="text-3xl mt-4">Píe de página</h2>
      <div className="flex gap-5">
        <button onClick={() => handleButtonClick("diseño")}>Diseño</button>
        <button onClick={() => handleButtonClick("código")}>Código</button>
        <button onClick={handleCopyToClipboard}>Copiar código</button>
      </div>

      {activeButton === "diseño" && (
        <div>
          <div class="py-32 bg-gray-400"></div>
          <footer class="bg-slate-200 text-zinc-700 py-8">
            <div class="container mx-auto px-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 class="text-lg font-semibold mb-2">Enlaces</h3>
                  <ul class="space-y-2">
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-semibold mb-2">Redes Sociales</h3>
                  <ul class=" space-y-2">
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Inicio
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Acerca de
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Servicios
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hover:text-gray-400">
                        Contacto
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="flex  items-end">
                  <p class="text-sm ">
                    &copy; 2024 Tu Empresa. Todos los derechos reservados.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{footer2}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Footer2;
