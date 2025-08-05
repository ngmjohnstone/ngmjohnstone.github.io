// vite.config.js
export default {
    // config options
    base: '/',
    build: {
        target: 'es2022'
      },
      esbuild: {
        target: 'es2022'
      },
      optimizeDeps:{
        esbuildOptions: {
          target: 'es2022',
        }
      }
}