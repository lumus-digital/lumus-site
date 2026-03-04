import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Header from '@/components/Header'

describe('Header component', () => {
  it('should render correctly', () => {
    render(<Header />)

    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
})
