import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TP4---Citas/',  // 👈 importante: usá el nombre exacto del repositorio
  plugins: [react()],
})
