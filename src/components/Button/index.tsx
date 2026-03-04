import { IButtonProps } from './types'

/**
 * Button component.
 *
 * Used to render a button.
 *
 * @example
 * ```tsx
 * <Button dataTestId="button-test">
 *   Example with test id
 * </Button>
 * ```
 */

export default function Button({
  className,
  children,
  icon,
  onClick,
  disabled,
  'aria-label': ariaLabel,
  'data-test-id': dataTestId,
  variant = 'primary', // Default variant
  ...props
}: IButtonProps) {
  const isIconOnly = icon && !children // Check if it's an icon-only button
  const variantClasses = {
    primary: 'bg-purple-500 hover:bg-purple-700 text-white',
    secondary:
      'bg-transparent hover:bg-purple-700 border border-purple-700 hover:border-transparent text-white',
    danger: 'bg-red-500 hover:bg-red-700 text-white',
  }

  const variantClass = variantClasses[variant]

  return (
    <button
      className={`${isIconOnly ? '' : `${variantClass} ${className}`} font-semibold py-2 px-4 rounded-full cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center`}
      aria-label={isIconOnly ? ariaLabel : undefined}
      data-test-id={dataTestId || 'button'}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="ml-2 flex items-center">{icon}</span>}
    </button>
  )
}
