import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Menu from '.'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
}

export default meta
type Story = StoryObj<typeof Menu>

export const Default: Story = {
  args: {},
}
