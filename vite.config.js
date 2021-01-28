import { resolve } from 'path';

export default {
  server: {
    open: false,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/main.js'),
        other: resolve(__dirname, './src/other.js'),
      },
    },
  },
};
