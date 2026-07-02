import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  /** mockup 으로 json-server 를 사용할때 patch, put 을 사용해 수정을 하면 watch 로 실행했을때 리다이렉트 될수 있으므로 이그노어 추가 */
  server: {
    watch: {
      ignored: ['**/db.json']
    }
  }
})
