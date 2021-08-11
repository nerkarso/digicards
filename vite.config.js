import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, '/src'),
      },
    ],
  },
});
