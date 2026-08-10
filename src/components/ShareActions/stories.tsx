import type { Meta, StoryObj } from '@storybook/react'
import ShareActions from '.'
import type { ShareActionsProps } from './types'

const meta: Meta<typeof ShareActions> = {
  title: 'Components/ShareActions',
  component: ShareActions,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
    },
  },
}

export default meta

type Story = StoryObj<typeof ShareActions>

const defaultArgs = {
  title: 'Compartilhar este artigo',
  path: '/blog/detalhe-do-artigo',
  shareText: 'Lumus Digital · Hellen Izolan',
} satisfies ShareActionsProps

export const Default: Story = {
  args: defaultArgs,
  render: (args) => (
    <div className="p-8">
      <ShareActions
        title={args.title ?? defaultArgs.title}
        path={args.path ?? defaultArgs.path}
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const button = canvasElement.querySelector<HTMLButtonElement>(
      '[data-testid="share-menu-button"]',
    )

    button?.click()
  },
}
