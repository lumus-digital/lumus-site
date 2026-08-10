import { ITextProps } from './types'

/**
 * Text component.
 *
 * Used to render text elements, such as paragraphs or headings.
 *
 * @example
 * ```tsx
 * <Text as="h1" data-testid="heading-about">
 *   About Us
 * </Text>
 * ```
 */

export default function Text({
  children,
  className,
  'data-testid': dataTestId,
  as: Component = 'p',
}: ITextProps) {
  return (
    <Component className={className} data-testid={dataTestId}>
      {children}
    </Component>
  )
}
