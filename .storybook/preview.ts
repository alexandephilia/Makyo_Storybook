import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#18181b' },
      ],
    },
    a11y: {
      test: 'todo',
      config: {
        rules: [
          {
            id: 'color-contrast',
            selector: ':not([class*="dark:"])',
          },
        ],
      },
    },
  },
}

export default preview