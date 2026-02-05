/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/components/Dropdown'],
      outDir: 'dist',
      tsconfigPath: './tsconfig.app.json',
    })
  ],
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/components/Dropdown/index.ts'),
      name: 'PremiumDropdown',
      formats: ['es', 'umd'],
      fileName: (format) => `premium-dropdown.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'framer-motion', 'lucide-react', '@radix-ui/react-portal'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'FramerMotion',
          'lucide-react': 'LucideReact',
          '@radix-ui/react-portal': 'RadixPortal',
        },
      },
    },
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
});