import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Link from '.'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
}

export default meta
type Story = StoryObj<typeof Link>

export const InternalLink: Story = {
  args: {
    to: '/internal',
    children: 'Link Interno',
  },
}

export const ExternalLink: Story = {
  args: {
    to: 'https://example.com',
    isExternal: true,
    children: 'Link Externo',
  },
}

export const WithIcon: Story = {
  args: {
    to: '/icon',
    icon: <span>🔗</span>,
    children: 'Link com Ícone',
  },
}

export const IconOnly: Story = {
  args: {
    to: '/icon-only',
    icon: <span>🔗</span>,
    'aria-label': 'Ícone de link',
  },
}
