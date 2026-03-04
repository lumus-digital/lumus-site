import type { Preview } from '@storybook/nextjs-vite'
import '../src/globals.css'

// Função helper para criar mocks que aparecem nas Actions do Storybook
const createActionMock = (actionName: string) => {
  const mockFn = (...args: unknown[]) => {
    // Despacha um evento customizado que o Storybook captura
    if (typeof window !== 'undefined') {
      window.postMessage(
        {
          type: 'storybook-action',
          action: actionName,
          args,
        },
        '*',
      )
    }
    return Promise.resolve()
  }
  mockFn.mockName = actionName
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
