import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MagicParticles from '@/components/MagicParticles'

describe('MagicParticles component', () => {
  it('should render the particle container as decorative content', () => {
    render(<MagicParticles />)

    expect(screen.getByTestId('magic-particles')).toBeInTheDocument()
    expect(screen.getByTestId('magic-particles')).toHaveAttribute(
      'aria-hidden',
      'true',
    )
  })
})
