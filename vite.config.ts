import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src/renderer/src', import.meta.url))
        }
    },
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    isCustomElement: (tag: string): boolean => tag.startsWith('md') || tag.startsWith('lit') || tag.startsWith('ninja')
                }
            },
        }),
        vueJsx({
            isCustomElement: (tag: string): boolean => tag.startsWith('md-') || tag.startsWith('lit')
        }),
    ],
    root: './src/renderer/',
    publicDir: 'public',
    assetsInclude: '',
    clearScreen: true,
    base: '/To-Do',
    build: {
        outDir: '../../docs',
        emptyOutDir: true,
        sourcemap: true,

    }
})
