import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Text from '@/components/Text'

describe('Text component', () => {
  it('should render children correctly', () => {
    render(<Text data-test-id="text">Test content</Text>)
    expect(screen.getByTestId('text')).toBeInTheDocument()
  })

  it('renders correctly with default element', () => {
    render(<Text data-test-id="default-text">Default Text</Text>)
    const text = screen.getByTestId('default-text')
    expect(text.tagName).toBe('P')
  })

  it('renders with a custom element', () => {
    render(
      <Text as="h1" data-test-id="heading-text">
        Heading Text
      </Text>,
    )
    const text = screen.getByTestId('heading-text')
    expect(text.tagName).toBe('H1')
  })

  it('renders with a custom element using the as prop', () => {
    render(
      <Text as="span" data-test-id="custom-element-text">
        Custom Element Text
      </Text>,
    )
    const text = screen.getByTestId('custom-element-text')
    expect(text.tagName).toBe('SPAN')
  })

  it('applies custom class names', () => {
    render(
      <Text className="custom-class" data-test-id="styled-text">
        Styled Text
      </Text>,
    )
    const text = screen.getByTestId('styled-text')
    expect(text).toHaveClass('custom-class')
  })

  it('renders with data-test-id', () => {
    render(<Text data-test-id="text-id">Test ID</Text>)
    const text = screen.getByTestId('text-id')
    expect(text).toHaveAttribute('data-test-id', 'text-id')
  })
})
