import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/rainbowswitcher/", // ✅ Обязательно укажи имя репозитория!
  plugins: [react()],
});
