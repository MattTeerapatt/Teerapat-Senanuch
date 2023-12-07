import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Teerapat-Senanuch/',
  plugins: [react()],
  assetsInclude: ['**/*.mov', '**/*.mp4, **/*.png, **/*.jpg, **/*.jpeg, **/*.JPG , **/*.gif, **/*.svg'],
})
