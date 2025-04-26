import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import { getMultiTypeInputs } from './utils/build/analyze-dist'
import { viteCopyPlugin } from './utils/viteCopyPlugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    root: './',
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: getMultiTypeInputs(),
            plugins: [viteCopyPlugin(['files'])],
        },
    },
})
