import type { Meta, StoryObj } from '@storybook/react'
import MagicParticles from './index'

const meta: Meta<typeof MagicParticles> = {
  title: 'Components/MagicParticles',
  component: MagicParticles,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
}

export default meta

type Story = StoryObj<typeof MagicParticles>

export const Default: Story = {
  render: () => <MagicParticles />,
}
