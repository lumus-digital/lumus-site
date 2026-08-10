import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Home from '@/components/Home'

const meta: Meta<typeof Home> = {
  title: 'Components/Home',
  component: Home,
}

export default meta
type Story = StoryObj<typeof Home>

export const Default: Story = {
  args: {},
}
