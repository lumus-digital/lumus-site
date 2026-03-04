import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from '@/app/about/page'

describe('About page', () => {
  it('should render main title', () => {
    render(<About />)
    expect(screen.getByTestId('about-title')).toBeInTheDocument()
  })
})
