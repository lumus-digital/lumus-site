import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { BlogPageView } from './page'
import { blogArticles } from '@/mocks/blogArticles'

const meta: Meta<typeof BlogPageView> = {
  title: 'Pages/Blog',
  component: BlogPageView,
}

export default meta
type Story = StoryObj<typeof BlogPageView>

export const Default: Story = {
  args: {
    articles: blogArticles,
  },
}
