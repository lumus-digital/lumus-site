import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/home/page'

describe('Home page', () => {
  it('should render main title and description', () => {
    render(<Home />)
    expect(screen.getByTestId('home-title')).toBeInTheDocument()
    expect(screen.getByTestId('home-description')).toBeInTheDocument()
  })
})
