import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Footer1 = () => {
  const [activeButton, setActiveButton] = useState("diseño");
  const [footer, setFooter] = useState(""); // Variable para almacenar el código HTML

  const handleButtonClick = (button) => {
    setActiveButton(button);

    // Actualizar el código cuando haces clic en el botón "Código"
    if (button === "código") {
      setFooter(`
      <footer class="bg-slate-200 text-zinc-700">
            <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
              <div class="flex flex-col items-center md:items-start">
                <h3 class="text-xl font-bold mb-4">Enlaces</h3>
                <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
              <div class="flex items-center justify-center md:justify-start mb-4 md:mb-0">
                <p class="text-gray-400">
                  © 2024 Tu Empresa. Todos los derechos reservados.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm2.541 18.63c-.012.337-.059.633-.123.905-.191.901-.663 1.644-1.426 2.26-.77.615-1.648.922-2.625.922-1.165 0-2.143-.385-2.936-1.165-.798-.788-1.194-1.72-1.194-2.788 0-1.037.326-1.946.974-2.73s1.498-1.167 2.598-1.306c.343-.048.73-.071 1.166-.071.531 0 .988.097 1.368.295.38.198.698.454.957.767.26.314.452.65.578 1.008.129.358.193.71.193 1.057 0 .872-.315 1.64-.942 2.301s-1.494 1.007-2.569 1.366c1.031.271 1.782.82 2.251 1.648.469.829.703 1.721.703 2.676 0 .91-.203 1.76-.607 2.55z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.93 11.227v1.57c0 .588-.476 1.064-1.064 1.064H13.32c-.588 0-1.064-.476-1.064-1.064v-1.57c0-.588.476-1.064 1.064-1.064h3.546c.588 0 1.064.476 1.064 1.064zm-5.334 2.513v.006c-1.004.18-1.79 1.006-1.79 2.018 0 1.124.904 2.028 2.028 2.028s2.028-.904 2.028-2.028c0-1.012-.787-1.838-1.791-2.018zm.037-3.467c-2.142 0-3.894 1.746-3.894 3.894 0 2.143 1.751 3.894 3.894 3.894 2.148 0 3.894-1.751 3.894-3.894 0-2.148-1.746-3.894-3.894-3.894zm-8.237-.028h-2.17c-.646 0-1.17.525-1.17 1.17v10.628c0 .646.524 1.17 1.17 1.17h2.17c.645 0 1.17-.524 1.17-1.17V11.884c0-.646-.525-1.17-1.17-1.17zm-1.17 10.628v-7.287h2.17v7.287h-2.17z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.678 7.068H8.322c-.52 0-.94.42-.94.94v8.184c0 .52.42.94.94.94h7.356c.52 0 .94-.42.94-.94v-8.184c0-.52-.42-.94-.94-.94zm-3.678 5.834c-.905 0-1.638-.733-1.638-1.638s.733-1.638 1.638-1.638 1.638.733 1.638 1.638-.733 1.638-1.638 1.638zm3.733 2.97h-1.287v-1.287h1.287v1.287z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
      `);
    }
  };

  const handleCopyToClipboard = () => {
    // Crear un elemento textarea para copiar el código
    navigator.clipboard
      .writeText(footer)
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
          <footer class="bg-slate-200 text-zinc-700">
            <div class="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
              <div class="flex flex-col items-center md:items-start">
                <h3 class="text-xl font-bold mb-4">Enlaces</h3>
                <ul class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
              <div class="flex items-center justify-center md:justify-start mb-4 md:mb-0">
                <p class="text-gray-400">
                  © 2024 Tu Empresa. Todos los derechos reservados.
                </p>
              </div>
              <div class="flex items-center justify-center">
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm2.541 18.63c-.012.337-.059.633-.123.905-.191.901-.663 1.644-1.426 2.26-.77.615-1.648.922-2.625.922-1.165 0-2.143-.385-2.936-1.165-.798-.788-1.194-1.72-1.194-2.788 0-1.037.326-1.946.974-2.73s1.498-1.167 2.598-1.306c.343-.048.73-.071 1.166-.071.531 0 .988.097 1.368.295.38.198.698.454.957.767.26.314.452.65.578 1.008.129.358.193.71.193 1.057 0 .872-.315 1.64-.942 2.301s-1.494 1.007-2.569 1.366c1.031.271 1.782.82 2.251 1.648.469.829.703 1.721.703 2.676 0 .91-.203 1.76-.607 2.55z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.93 11.227v1.57c0 .588-.476 1.064-1.064 1.064H13.32c-.588 0-1.064-.476-1.064-1.064v-1.57c0-.588.476-1.064 1.064-1.064h3.546c.588 0 1.064.476 1.064 1.064zm-5.334 2.513v.006c-1.004.18-1.79 1.006-1.79 2.018 0 1.124.904 2.028 2.028 2.028s2.028-.904 2.028-2.028c0-1.012-.787-1.838-1.791-2.018zm.037-3.467c-2.142 0-3.894 1.746-3.894 3.894 0 2.143 1.751 3.894 3.894 3.894 2.148 0 3.894-1.751 3.894-3.894 0-2.148-1.746-3.894-3.894-3.894zm-8.237-.028h-2.17c-.646 0-1.17.525-1.17 1.17v10.628c0 .646.524 1.17 1.17 1.17h2.17c.645 0 1.17-.524 1.17-1.17V11.884c0-.646-.525-1.17-1.17-1.17zm-1.17 10.628v-7.287h2.17v7.287h-2.17z"></path>
                  </svg>
                </a>
                <a href="#" class="text-gray-400 hover:text-gray-700 mx-2">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.678 7.068H8.322c-.52 0-.94.42-.94.94v8.184c0 .52.42.94.94.94h7.356c.52 0 .94-.42.94-.94v-8.184c0-.52-.42-.94-.94-.94zm-3.678 5.834c-.905 0-1.638-.733-1.638-1.638s.733-1.638 1.638-1.638 1.638.733 1.638 1.638-.733 1.638-1.638 1.638zm3.733 2.97h-1.287v-1.287h1.287v1.287z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      )}

      {activeButton === "código" && (
        <div>
          {/* Renderizar el código HTML almacenado en la variable 'codigo' */}
          <pre>
            <code>{footer}</code>
          </pre>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Footer1;
