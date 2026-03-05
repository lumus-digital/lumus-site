'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { routes } from '@/routes'
import { colors } from '@/tokens'
import Link from '@/components/Link'

/**
 * Menu component.
 *
 * Used to render menu
 *
 * @example
 * ```tsx
 * <Menu />
 * ```
 */

export default function Menu() {
  const menuItems = [
    { name: 'Home', to: routes.HOME },
    { name: 'About', to: routes.ABOUT },
    { name: 'Contact', to: routes.CONTACT },
  ]

  const [openMenu, setOpenMenu] = useState(false)

  // close menu on escape key press
  useEffect(() => {
    if (!openMenu) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(false)
    }
    globalThis.addEventListener('keydown', handleKeyDown)
    return () => globalThis.removeEventListener('keydown', handleKeyDown)
  }, [openMenu])

  return (
    <nav
      aria-label="Menu principal"
      data-testid="menu"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      {/* Start section */}
      <div className="flex lg:flex-1">
        <Link to={routes.HOME} className="">
          <Image
            src="/lumus-digital-logo.png"
            alt="Lumus Digital Logo"
            className="h-18 w-auto"
            width={72}
            height={72}
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          className="cursor-pointer -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="size-6"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {openMenu && (
        <div className="fixed inset-0 bg-gray-900/90 flex flex-col items-center justify-center gap-8 z-[9999]">
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between w-auto">
            <Link to={routes.HOME} className="flex items-center">
              <Image
                src="/lumus-digital-logo.png"
                alt="Lumus Digital Logo"
                className="h-18 w-auto"
                width={72}
                height={72}
              />
            </Link>
            <button
              type="button"
              className="text-gray-200 cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-8"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 mt-24">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                size="xl"
                className={colors.primaryInverse}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {/* End section */}
      <div className="hidden lg:flex lg:gap-x-12">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            size="md"
            className={`${colors.inverseLink}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Left section */}
      {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      </div> */}
    </nav>
  )
}
