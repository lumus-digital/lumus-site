import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BlogDetailLayout from '@/app/blog/[id]/layout'

describe('Blog detail layout', () => {
  it('should render its children without wrapping markup', () => {
    render(
      <BlogDetailLayout>
        <div data-testid="blog-detail-layout-child">Child</div>
      </BlogDetailLayout>,
    )

    expect(screen.getByTestId('blog-detail-layout-child')).toBeInTheDocument()
  })
})
