import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/rainbowswitcher/", // ⚠️ Подставь имя своего репозитория!
  plugins: [vue(), react()],
});
