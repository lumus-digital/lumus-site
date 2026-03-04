'use client'

import ILinkProps from './types'
import NextLink from 'next/link'

/**
 * Link component.
 *
 * Used to render links, both internal and external.
 *
 * @example
 * ```tsx
 * <Link to="/about" dataTestId="link-about">
 *   About Us
 * </Link>
 * ```
 */

export default function Link({
  to,
  isExternal = false,
  size = 'sm',
  className,
  children,
  icon,
  onClick,
  'aria-label': ariaLabel,
  'data-test-id': dataTestId,
  ...props
}: ILinkProps) {
  // Map size to Tailwind classes
  const sizeClass =
    {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }[size] || 'text-sm'

  const baseClass = `${sizeClass} font-semibold ${className || ''}`

  if (isExternal) {
    return (
      <a
        href={to}
        className={baseClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        data-test-id={dataTestId || 'external-link'}
        onClick={onClick}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    )
  }

  return (
    <NextLink
      href={to}
      className={baseClass}
      aria-label={ariaLabel}
      data-test-id={dataTestId || 'internal-link'}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </NextLink>
  )
}
