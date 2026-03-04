import { ITextProps } from './types'

/**
 * Text component.
 *
 * Used to render text elements, such as paragraphs or headings.
 *
 * @example
 * ```tsx
 * <Text as="h1" dataTestId="heading-about">
 *   About Us
 * </Text>
 * ```
 */

export default function Text({
  children,
  className,
  'data-test-id': dataTestId,
  as: Component = 'p',
}: ITextProps) {
  return (
    <Component className={className} data-test-id={dataTestId}>
      {children}
    </Component>
  )
}
