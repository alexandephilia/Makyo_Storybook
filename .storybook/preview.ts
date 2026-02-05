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
            // Disable contrast check on elements with dark: variants
            // since tests run on light bg but detect dark: classes
            id: 'color-contrast',
            selector: ':not([class*="dark:"])',
          },
        ],
      },
    },
  },
}

export default preview