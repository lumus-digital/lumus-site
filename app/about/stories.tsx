import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import About from './page'

const meta: Meta<typeof About> = {
  title: 'Pages/About',
  component: About,
}

export default meta
type Story = StoryObj<typeof About>

export const Default: Story = {
  args: {},
}
