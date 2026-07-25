import { defineConfig, loadEnv } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      tailwindcss(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
    base: mode === 'production' ? env.VITE_BASE_URL : "/"
  }
})

//process.env.NODE_ENV: Lấy môi trường thực tế
// - production: Môi trường build ra sản phẩm
// - development: Môi trường phát triển