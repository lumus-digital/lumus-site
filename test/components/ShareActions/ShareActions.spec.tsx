import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import ShareActions from '@/components/ShareActions'

describe('ShareActions component', () => {
  beforeEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
      configurable: true,
    })

    Object.defineProperty(navigator, 'share', {
      value: vi.fn().mockResolvedValue(undefined),
      configurable: true,
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render the share icon trigger and open the dropdown', async () => {
    render(<ShareActions title="Test article" path="/blog/test-article" />)

    expect(screen.getByTestId('share-menu-button')).toHaveAttribute(
      'aria-expanded',
      'false',
    )

    fireEvent.click(screen.getByTestId('share-menu-button'))

    await waitFor(() => {
      expect(screen.getByTestId('share-menu-button')).toHaveAttribute(
        'aria-expanded',
        'true',
      )
    })

    expect(screen.getByTestId('share-menu')).toBeInTheDocument()
    expect(screen.getByTestId('share-linkedin-button')).toHaveAttribute(
      'href',
      expect.stringContaining('linkedin.com/sharing/share-offsite'),
    )

    expect(screen.getByTestId('share-other-button')).toBeEnabled()
    expect(screen.getByTestId('share-copy-button')).toBeEnabled()
  })

  it('should copy the article link to the clipboard', async () => {
    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))

    fireEvent.click(screen.getByTestId('share-copy-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1)
  })

  it('should close the dropdown when the clipboard API is unavailable', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      configurable: true,
    })

    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))
    fireEvent.click(screen.getByTestId('share-copy-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })
  })

  it('should hide the other apps action when the Web Share API is unavailable', async () => {
    Object.defineProperty(navigator, 'share', {
      value: undefined,
      configurable: true,
    })

    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))

    await waitFor(() => {
      expect(screen.getByTestId('share-menu')).toBeInTheDocument()
    })

    expect(screen.queryByTestId('share-other-button')).not.toBeInTheDocument()
  })

  it('should close the dropdown when pressing Escape', async () => {
    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))

    await waitFor(() => {
      expect(screen.getByTestId('share-menu')).toBeInTheDocument()
    })

    fireEvent.keyDown(document, { key: 'Escape' })

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })
  })

  it('should close the dropdown when clicking outside', async () => {
    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))

    await waitFor(() => {
      expect(screen.getByTestId('share-menu')).toBeInTheDocument()
    })

    fireEvent.mouseDown(document.body)

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })
  })

  it('should close the dropdown when copying the article link fails', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        writeText: vi.fn().mockRejectedValue(new Error('Copy failed')),
      },
      configurable: true,
    })

    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))
    fireEvent.click(screen.getByTestId('share-copy-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1)
  })

  it('should share through the Web Share API when other apps are clicked', async () => {
    render(
      <ShareActions
        title="Test article"
        path="/blog/test-article"
        shareText="Lumus Digital · Hellen Izolan"
      />,
    )

    fireEvent.click(screen.getByTestId('share-menu-button'))
    fireEvent.click(screen.getByTestId('share-other-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })

    expect(navigator.share).toHaveBeenCalledWith({
      title: 'Test article',
      text: 'Lumus Digital · Hellen Izolan',
      url: 'http://localhost:3000/blog/test-article',
    })
  })

  it('should close the dropdown when the Web Share API fails for a non-abort error', async () => {
    Object.defineProperty(navigator, 'share', {
      value: vi.fn().mockRejectedValue(new Error('Share failed')),
      configurable: true,
    })

    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))
    fireEvent.click(screen.getByTestId('share-other-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })

    expect(navigator.clipboard.writeText).not.toHaveBeenCalled()
  })

  it('should close the dropdown when the Web Share API is aborted', async () => {
    Object.defineProperty(navigator, 'share', {
      value: vi
        .fn()
        .mockRejectedValue(new DOMException('Aborted', 'AbortError')),
      configurable: true,
    })

    render(<ShareActions title="Test article" path="/blog/test-article" />)

    fireEvent.click(screen.getByTestId('share-menu-button'))
    fireEvent.click(screen.getByTestId('share-other-button'))

    await waitFor(() => {
      expect(screen.queryByTestId('share-menu')).not.toBeInTheDocument()
    })
  })
})
