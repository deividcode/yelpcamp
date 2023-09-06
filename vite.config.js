import { defineConfig } from 'vite';
import { resolve } from 'path'
// import legacy from '@vitejs/plugin-legacy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/search.html'),
      },
    },
    minify: false
  },
  // plugins: [
  //   legacy({
  //     targets: ["defaults"]
  //   }),
  //   ViteImageOptimizer({
  //     /* pass your config */
  //   }),
  // ],
  server: {
    open: '/nested/search.html',
  },
})