import type { Preview } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import '../src/globals.css'

// Cria um mock que dispara a action nativa e resolve como Promise (exigido pela API de router do Next.js)
const createActionMock = (actionName: string) => {
  const mockFn = (...args: unknown[]) => {
    action(actionName)(...args)
    return Promise.resolve()
  }
  return mockFn
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#101828' }],
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
      disable: true,
    },

    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
        query: {},
      },
      router: {
        push: createActionMock('router.push'),
        replace: createActionMock('router.replace'),
        back: createActionMock('router.back'),
        forward: createActionMock('router.forward'),
        refresh: createActionMock('router.refresh'),
        prefetch: createActionMock('router.prefetch'),
      },
    },
  },
}

export default preview
