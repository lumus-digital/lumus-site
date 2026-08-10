import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from '@/app/page'

describe('Root page', () => {
  it('should render the Home page content', () => {
    render(<Page />)
    expect(screen.getByTestId('home-title')).toBeInTheDocument()
    expect(screen.getByTestId('home-description')).toBeInTheDocument()
  })
})
