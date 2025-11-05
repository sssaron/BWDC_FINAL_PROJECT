import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [svelte()],
    base: command === 'build' ? '/BWDC_FINAL_PROJECT/' : '/', // ✅ only use the repo path when building for deploy
  }
})