import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@services', replacement: path.resolve(__dirname, 'src/services') },
      { find: '@recoil', replacement: path.resolve(__dirname, 'src/recoil') },
      { find: '@stories', replacement: path.resolve(__dirname, 'src/stories') },
      { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: '@tests', replacement: path.resolve(__dirname, 'src/tests') },
    ]
  }
});