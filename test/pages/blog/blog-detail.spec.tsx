import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import BlogDetailPage, {
  generateMetadata,
  generateStaticParams,
} from '@/app/blog/[id]/page'
import { blogArticles } from '@/mocks/blogArticles'
import {
  getBlogArticlePath,
  getBlogArticleSlug,
} from '../../../src/utils/blogRoutes'

vi.mock('next/navigation', () => ({
  notFound: vi.fn(() => {
    throw new Error('NEXT_NOT_FOUND')
  }),
}))

describe('Blog detail page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should generate static params for all blog articles', async () => {
    const params = await generateStaticParams()

    expect(params).toEqual(
      blogArticles.map((article) => ({ id: getBlogArticleSlug(article) })),
    )
  })

  it('should generate metadata for an existing article', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ id: '1' }),
    })

    expect(metadata.title).toBe(blogArticles[0].title)
    expect(metadata.description).toBe(
      `Lumus Digital · ${blogArticles[0].author} - ${blogArticles[0].summary}`,
    )
    expect(metadata.alternates?.canonical).toBe(
      getBlogArticlePath(blogArticles[0]),
    )
  })

  it('should generate fallback metadata for an unknown article id', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ id: 'missing' }),
    })

    expect(metadata.title).toBe('Artigo não encontrado')
  })

  it('should render the article content for a valid id', async () => {
    const page = await BlogDetailPage({ params: Promise.resolve({ id: '1' }) })

    render(page)

    expect(screen.getByTestId('blog-detail-page')).toBeInTheDocument()
    expect(screen.getByTestId('blog-detail-category-link')).toHaveAttribute(
      'href',
      `/blog?categoria=${encodeURIComponent(blogArticles[0].category)}`,
    )
    expect(screen.getByTestId('share-actions')).toBeInTheDocument()
    expect(screen.getByTestId('blog-detail-title')).toHaveTextContent(
      blogArticles[0].title,
    )
    expect(screen.getByTestId('blog-detail-author')).toHaveTextContent(
      blogArticles[0].author,
    )
  })

  it('should throw not found for an unknown article id', async () => {
    await expect(
      BlogDetailPage({ params: Promise.resolve({ id: 'missing' }) }),
    ).rejects.toThrow('NEXT_NOT_FOUND')
  })

  it('should render code and quote content blocks', async () => {
    vi.resetModules()
    vi.doMock('@/mocks/blogArticles', () => ({
      blogArticles: [
        {
          id: 'code-quote',
          title: 'Bloco de código',
          author: 'Autora Teste',
          authorRole: 'Software Developer',
          date: '2025-01-01',
          tags: [],
          summary: 'Resumo de teste',
          avatar: '/blog-images/avatar.jpeg',
          category: 'Desenvolvimento Web',
          image: '',
          content: [
            { type: 'code', language: 'ts', code: 'const a = 1' },
            { type: 'quote', text: 'Uma citação de teste' },
          ],
        },
      ],
    }))

    const { default: MockedBlogDetailPage } =
      await import('@/app/blog/[id]/page')
    const page = await MockedBlogDetailPage({
      params: Promise.resolve({ id: 'code-quote' }),
    })

    render(page)

    expect(screen.getByText('const a = 1')).toBeInTheDocument()
    expect(screen.getByText('Uma citação de teste')).toBeInTheDocument()

    vi.doUnmock('@/mocks/blogArticles')
    vi.resetModules()
  })
})
