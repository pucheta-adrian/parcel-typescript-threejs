import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset URLs, so the build can be served from any sub-path.
  base: './',
  server: {
    port: 1234,
  },
});
