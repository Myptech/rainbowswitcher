import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/rainbowswitcher/", // 👈 Имя репозитория на GitHub!
  plugins: [react()],
});
