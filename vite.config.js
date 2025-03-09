import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/rainbowswitcher/", // 👈 Поменяй на имя своего репозитория!
  plugins: [react()],
});
