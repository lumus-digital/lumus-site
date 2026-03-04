import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from '@/components/Footer'

describe('Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />)

    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
