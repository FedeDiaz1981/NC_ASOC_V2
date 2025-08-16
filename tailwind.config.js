/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,mdx,md}",
  ],
   theme: {
    extend: {
      colors: {
        hueso: "#F5F2E9",
        beige: "#CFA784",
        azulAereo: "#3E5F73",
        azulProfundo: "#1F3C4D",
        arena: "#E5D2B8",
      }
    }
  },
  plugins: [],
};
