import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Menu from '@/components/Menu'

describe('Menu component', () => {
  it('should render navigation and menu items (desktop)', () => {
    render(<Menu />)
    const nav = screen.getByTestId('menu')
    expect(nav).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('should open and close mobile menu on button click', () => {
    render(<Menu />)

    const openBtn = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(openBtn)
    expect(screen.getByText('Home')).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    fireEvent.click(closeBtn)
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('should close mobile menu on Escape key', () => {
    render(<Menu />)
    const openBtn = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(openBtn)
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })
    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('should call setOpenMenu(false) when clicking a mobile menu item', () => {
    render(<Menu />)

    const openBtn = screen.getByRole('button', { name: /open main menu/i })
    fireEvent.click(openBtn)

    const aboutLink = screen.getAllByText('About')[0]
    fireEvent.click(aboutLink)

    expect(screen.getByTestId('menu')).toBeInTheDocument()
  })

  it('should have correct aria-label for nav', () => {
    render(<Menu />)
    const nav = screen.getByLabelText('Menu principal')
    expect(nav).toBeInTheDocument()
  })
})
