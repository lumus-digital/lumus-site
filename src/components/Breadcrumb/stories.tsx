import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from '.'
import type { BreadcrumbItem } from './types'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

const items: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Detalhe do Artigo' },
]

export const Default: Story = {
  args: {
    items,
  },
}
