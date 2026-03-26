import Menu from '@/components/Menu'

/**
 * Header component.
 *
 * Used to render header
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 */

export default function Header() {
  return (
    <header className="relative inset-x-0 top-0 z-50" data-testid="header">
      <Menu />
    </header>
  )
}
