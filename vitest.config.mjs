import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    transformMode: {
      web: [/.[tj]sx?$/],
    },
    deps: {
      optimizer: {
        web: {
          enabled: true,
          include: ['@instructure/ui-buttons', '@instructure/ui-testable', '@instructure/ui-react-utils'],
        },
      },
    },
  },
  resolve: {
    mainFields: ['module', 'main'],
  },
});