import {defineConfig} from 'vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    base: "./",
    define: {
        __VUE_OPTIONS_API__: false,
        __VUE_PROD_DEVTOOLS__: false
    },
    plugins: [Vue(), Layouts(), Pages()]
})
