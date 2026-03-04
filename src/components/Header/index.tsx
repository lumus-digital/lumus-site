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
    <header
      className="relative inset-x-0 top-0 z-50"
      // className="sticky inset-x-0 top-0 z-50"
      // className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur-md"
      data-testid="header"
    >
      <Menu />
    </header>
  )
}
