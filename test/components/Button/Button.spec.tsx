import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Button from '@/components/Button'

describe('Button component', () => {
  it('should render children correctly', () => {
    render(<Button data-testid="button">Test content</Button>)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  it('renders with an icon only', () => {
    render(
      <Button
        icon={<span data-testid="icon">Icon</span>}
        data-testid="icon-button"
      />,
    )
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} data-testid="click-button">
        Click Me
      </Button>,
    )
    fireEvent.click(screen.getByTestId('click-button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies custom class names', () => {
    render(
      <Button className="custom-class" data-testid="custom-class-button">
        Click Me
      </Button>,
    )
    expect(screen.getByTestId('custom-class-button')).toHaveClass(
      'custom-class',
    )
  })

  it('sets aria-label for icon-only buttons', () => {
    render(
      <Button
        icon={<span />}
        aria-label="Icon Button"
        data-testid="icon-only-button"
      />,
    )
    expect(screen.getByTestId('icon-only-button')).toBeInTheDocument()
    expect(screen.getByLabelText('Icon Button')).toBeInTheDocument()
  })
})
