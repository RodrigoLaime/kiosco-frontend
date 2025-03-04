import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // Asegúrate de que esto apunte al archivo correcto de configuración de PostCSS
  },
})
