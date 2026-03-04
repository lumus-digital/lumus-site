import Text from '@/componentsText'
import { colors } from '@/tokens'

/**
 * Footer component.
 *
 * Used to render footer
 *
 * @example
 * ```tsx
 * <Footer />
 * ```
 */

export default function Footer() {
  return (
    <footer
      className="relative bottom-0 inset-x-0 text-center py-4"
      // className="fixed bottom-0 inset-x-0 text-center py-4"
      // className="fixed bottom-0 inset-x-0 z-50 w-full text-center py-4 bg-gray-900/90 backdrop-blur-md"
      data-testid="footer"
    >
      <Text className={`${colors.primary} text-sm`} data-testid="footer-text">
        2026 - Lumus Digital. Todos os direitos reservados.
      </Text>
    </footer>
  )
}
