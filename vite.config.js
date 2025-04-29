import { defineConfig } from 'vite'
import { getMultiTypeInputs } from './utils/build/generate-static-modules'
import { viteCopyPlugin } from './utils/viteCopyPlugin'

export default defineConfig({
    root: './',
    publicDir: './public',
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: getMultiTypeInputs(),
            plugins: [viteCopyPlugin(['files', 'manual/**/*.{json}'])],
        },
    },
})
