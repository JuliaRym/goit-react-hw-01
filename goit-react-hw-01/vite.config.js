// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // <https://vitejs.dev/config/>
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     sourcemap: true,
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   root: "./", // Katalog główny, gdzie znajduje się index.html
//   plugins: [react()],
//   build: {
//     outDir: "dist", // Katalog, gdzie będą generowane pliki produkcyjne
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    jsx: "react", // Dodaj tę linię
  },
});
