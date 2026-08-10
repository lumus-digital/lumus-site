import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Breadcrumb from '@/components/Breadcrumb'

describe('Breadcrumb component', () => {
  it('should render the breadcrumb navigation', () => {
    render(
      <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />,
    )
    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument()
  })
})
