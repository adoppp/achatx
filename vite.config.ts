import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    base: '/AChatX/',
    plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
    build: {
        cssMinify: 'esbuild',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        tsconfigPaths: true,
    },
});
