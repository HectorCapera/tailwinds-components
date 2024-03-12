const ContentPage = () => {
  return (
    <section class="grid grid-cols-2 gap-20 px-4 py-10 mx-auto max-w-7xl lg:px-16 xl:px-24 md:grid-cols-2 lg:grid-cols-4">
      <div class="flex flex-col items-center">
        <picture>
          <img
            src="/skill-icons_react-dark.png"
            alt="React"
            class="h-12 w-12 mb-4 hover:scale-110 transition duration-300 ease-in-out"
          />
        </picture>
        <h3 class="mb-3 text-lg font-medium leading-tight text-gray-300">
          React
        </h3>
      </div>
      <div class="flex flex-col items-center">
        <picture>
          <img
            src="/skill-icons_tailwindcss-light.png"
            alt="Tailwind CSS"
            class="h-12 w-12 mb-4 hover:scale-110 transition duration-300 ease-in-out"
          />
        </picture>
        <h3 class="mb-3 text-lg font-medium leading-tight text-gray-300">
          Tailwind CSS
        </h3>
      </div>
      <div class="flex flex-col items-center">
        <picture>
          <img
            src="/skill-icons_typescript.png"
            alt="Typescript"
            class="h-12 w-12 mb-4 hover:scale-110 transition duration-300 ease-in-out"
          />
        </picture>
        <h3 class="mb-3 text-lg font-medium leading-tight text-gray-300">
          Typescript
        </h3>
      </div>
      <div class="flex flex-col items-center">
        <picture>
          <img
            src="/skill-icons_astro.png"
            alt="Astro"
            class="h-12 w-12 mb-4 hover:scale-110 transition duration-300 ease-in-out"
          />
        </picture>
        <h3 class="mb-3 text-lg font-medium leading-tight text-gray-300">
          Astro
        </h3>
      </div>
    </section>
  );
};

export default ContentPage;
