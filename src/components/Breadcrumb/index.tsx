import Link from 'next/link'
import type { IBreadcrumbProps } from './types'

/**
 * Breadcrumb component.
 *
 * Used to render a breadcrumb navigation.
 *
 * @example
 * ```tsx
 * <Breadcrumb items={items} />
 * ```
 */

export default function Breadcrumb({
  items,
  className,
}: Readonly<IBreadcrumbProps>) {
  return (
    <nav aria-label="Breadcrumb" className={className} data-testid="breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-400">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1
          return (
            <li key={item.label} className="z-10 flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:underline text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="text-zinc-200 font-semibold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-1 select-none">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
