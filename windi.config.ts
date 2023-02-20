import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  content: [
    "./index.html",
    "./src/*.{vue}",
    "./src/**/*.{vue}",
  ],
  theme: {
    extend: {
    },
  },
  plugins: [formsPlugin],
})
