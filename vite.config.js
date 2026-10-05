import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'Front end',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: resolve(__dirname, 'Front end/index.html'),
        recipes: resolve(__dirname, 'Front end/recipes.html'),
        recipeDetail: resolve(__dirname, 'Front end/recipe-detail.html'),
        submit: resolve(__dirname, 'Front end/submit.html'),
        about: resolve(__dirname, 'Front end/about.html')
      }
    }
  }
})