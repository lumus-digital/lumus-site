import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Link from '@/components/Link'

describe('Link component', () => {
  it('should render children correctly', () => {
    render(
      <Link to="/test" data-test-id="link">
        Test content
      </Link>,
    )

    expect(screen.getByTestId('link')).toBeInTheDocument()
  })

  it('renders an external link with target and rel attributes', () => {
    render(
      <Link to="https://example.com" isExternal data-test-id="external-link">
        External Link
      </Link>,
    )
    const link = screen.getByTestId('external-link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders an internal link without target and rel attributes', () => {
    render(
      <Link to="/internal" data-test-id="internal-link">
        Internal Link
      </Link>,
    )
    const link = screen.getByTestId('internal-link')
    expect(link).toHaveAttribute('href', '/internal')
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  it('applies custom class names', () => {
    render(
      <Link
        to="/test"
        className="custom-class"
        data-test-id="custom-class-link"
      >
        Test Link
      </Link>,
    )
    expect(screen.getByTestId('custom-class-link')).toHaveClass('custom-class')
  })

  it('renders with an icon', () => {
    render(
      <Link
        to="/test"
        icon={<span data-testid="icon">Icon</span>}
        data-test-id="icon-link"
      />,
    )
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
