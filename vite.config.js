import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/rainbowswitcher/", // ✅ Убедись, что тут правильно указано имя репозитория!
  plugins: [react()], // ❌ Убрали Vue, т.к. он не нужен!
});
