import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { VueRouterAutoImports } from "unplugin-vue-router";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import AutoImport from "unplugin-auto-import/vite";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
  plugins: [
    vue(),
    VueRouter({
      dts: "./types/typed-router.d.ts",
    }),
    Layouts(),
    AutoImport({
      dts: "./types/auto-imports.d.ts",
      imports: [
        "vue",
        VueRouterAutoImports,
        {
          "vue-router/auto": ["createRouter", "createWebHistory"],
          "virtual:generated-layouts": ["setupLayouts"],
        },
      ],
    }),
  ],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
