import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Blog, { generateMetadata } from '@/app/blog/page'
import { blogArticles } from '@/mocks/blogArticles'

describe('Blog', () => {
  it('should render the blog title', async () => {
    const page = await Blog({ searchParams: Promise.resolve({}) })

    render(page)

    expect(screen.getByTestId('blog-title')).toHaveTextContent('Blog')
  })

  it('should render one link per article card', async () => {
    const page = await Blog({ searchParams: Promise.resolve({}) })

    render(page)

    const uniqueCategories = new Set(
      blogArticles.map((article) => article.category),
    )
    const expectedLinkCount =
      1 + 1 + uniqueCategories.size + blogArticles.length

    expect(screen.getAllByRole('link')).toHaveLength(expectedLinkCount)
  })

  it('should render only articles from the selected category', async () => {
    const category = blogArticles[0].category
    const page = await Blog({
      searchParams: Promise.resolve({ categoria: category }),
    })

    render(page)

    const otherCategoryArticle = blogArticles.find(
      (article) => article.category !== category,
    )

    expect(screen.getByText(blogArticles[0].title)).toBeInTheDocument()
    if (otherCategoryArticle) {
      expect(
        screen.queryByText(otherCategoryArticle.title),
      ).not.toBeInTheDocument()
    }
  })

  it('should generate metadata filtered by category', async () => {
    const category = blogArticles[0].category
    const metadata = await generateMetadata({
      searchParams: Promise.resolve({ categoria: category }),
    })

    expect(metadata.title).toBe(`Blog | Categoria: ${category}`)
    expect(metadata.robots).toEqual({ index: false, follow: true })
  })

  it('should generate default metadata without a category', async () => {
    const metadata = await generateMetadata({
      searchParams: Promise.resolve({}),
    })

    expect(metadata.title).toBe('Blog')
  })
})
