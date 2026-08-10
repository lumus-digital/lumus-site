import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'

vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}))

vi.mock('@/components/Header', () => ({
  default: () => <div data-testid="mock-header">mock-header</div>,
}))

vi.mock('@/components/Footer', () => ({
  default: () => <div data-testid="mock-footer">mock-footer</div>,
}))

import RootLayout, { metadata } from '@/app/layout'

describe('Root layout', () => {
  beforeAll(() => {
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.resetModules()
  })

  it('should expose the expected metadata', () => {
    expect(metadata.title).toEqual({
      default: 'Lumus Digital',
      template: '%s | Lumus Digital',
    })
    expect(metadata.description).toContain('Construindo experiências digitais')
  })

  it('should render the application shell around children', () => {
    const markup = renderToStaticMarkup(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>,
    )

    expect(markup).toContain('lang="pt-BR"')
    expect(markup).toContain('Test content')
    expect(markup).toContain('mock-header')
    expect(markup).toContain('mock-footer')
  })
})
