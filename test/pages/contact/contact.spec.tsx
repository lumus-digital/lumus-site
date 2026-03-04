import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from '@/app/contact/page'

describe('Contact page', () => {
  it('should render main title', () => {
    render(<Contact />)
    expect(screen.getByTestId('contact-title')).toBeInTheDocument()
  })
})
