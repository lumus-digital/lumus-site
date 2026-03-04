import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Contact from './page'

const meta: Meta<typeof Contact> = {
  title: 'Pages/Contact',
  component: Contact,
}

export default meta
type Story = StoryObj<typeof Contact>

export const Default: Story = {
  args: {},
}
