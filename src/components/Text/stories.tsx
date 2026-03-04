import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Text from '.'

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: 'Example text',
  },
}

export const CustomElement: Story = {
  args: {
    as: 'span',
    children: 'Texto como span',
  },
}

export const WithClassName: Story = {
  args: {
    className: 'custom-class',
    children: 'Texto com classe personalizada',
  },
}
