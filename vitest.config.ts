import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig } from 'vitest/config'

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

import { playwright } from '@vitest/browser-playwright'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@/app': path.resolve(__dirname, 'app'),
      '@/routes': path.resolve(__dirname, 'app/routes.ts'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/tokens': path.resolve(__dirname, 'src/tokens.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
    include: ['**/*.spec.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['app/**/*.{ts,tsx}', 'src/**/*.{ts,tsx}'],
      exclude: ['**/*.stories.*', '.storybook/**'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
    projects: [
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
