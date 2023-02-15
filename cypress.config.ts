import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'fc84dg',
  env: {
    cypressDownloadPath: './cypress/downloads/download.json',
    cypressDownloadBeamPath: './cypress/downloads/untitled.beam',
    cypressDownloadNewBeamPath: './cypress/downloads/untitled.beam',
    cypressDownloadBvgPath: './cypress/downloads/untitled.bvg',
    cypressDownloadSvgPath: './cypress/downloads/untitled.svg',
    cypressDownloadPngPath: './cypress/downloads/untitled.png',
    cypressDownloadJpgPath: './cypress/downloads/untitled.jpeg',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.ts')(on, config)
    },
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})