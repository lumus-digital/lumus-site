'use client'

import { useEffect, useRef, useState } from 'react'
import { Copy, MoreHorizontal, Share2 } from 'lucide-react'
import Link from '@/components/Link'
import type { ShareActionsProps } from './types'

async function copyText(value: string) {
  if (!navigator.clipboard?.writeText) return false

  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    return false
  }
}

export default function ShareActions({
  title,
  path,
  shareText,
}: Readonly<ShareActionsProps>) {
  const [shareUrl, setShareUrl] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const supportsNativeShare = typeof navigator.share === 'function'

  useEffect(() => {
    setShareUrl(`${window.location.origin}${path}`)
  }, [path])

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleDocumentClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const linkedinHref = shareUrl
    ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    : '#'

  async function handleCopyLink() {
    if (!shareUrl) return

    await copyText(shareUrl)
    setIsOpen(false)
  }

  async function handleOtherShare() {
    if (!shareUrl) return

    if (!supportsNativeShare) {
      setIsOpen(false)
      return
    }

    try {
      await navigator.share({
        title,
        text: shareText ?? title,
        url: shareUrl,
      })
    } catch (error) {
      if ((error as DOMException)?.name !== 'AbortError') {
        setIsOpen(false)
        return
      }
    }

    setIsOpen(false)
  }

  function toggleMenu() {
    setIsOpen((current) => !current)
  }

  return (
    <div className="relative isolate inline-flex" data-testid="share-actions">
      <div ref={menuRef} className="relative">
        <button
          type="button"
          onClick={toggleMenu}
          data-testid="share-menu-button"
          aria-label={`Abrir opções de compartilhamento para ${title}`}
          aria-expanded={isOpen}
          aria-haspopup="true"
          className="relative z-10 inline-flex size-11 cursor-pointer items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 transition hover:border-purple-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <Share2 className="size-5" aria-hidden="true" />
        </button>

        {isOpen && (
          <div
            data-testid="share-menu"
            className="absolute right-0 top-full z-20 mt-1 w-64 overflow-visible rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/30"
          >
            <Link
              to={linkedinHref}
              isExternal
              data-testid="share-linkedin-button"
              aria-label={`Compartilhar ${title} no LinkedIn`}
              className={`flex items-center gap-3 rounded-t-2xl border-b border-zinc-800 px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 ${shareUrl ? 'text-zinc-100 hover:bg-zinc-900' : 'pointer-events-none text-zinc-500'}`}
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 font-semibold">
                in
              </span>
              <span className="flex-1 text-left">Compartilhar no LinkedIn</span>
            </Link>
            <button
              type="button"
              disabled={!shareUrl}
              onClick={handleCopyLink}
              data-testid="share-copy-button"
              aria-label={`Copiar link do artigo ${title}`}
              className="flex w-full cursor-pointer items-center gap-3 border-b border-zinc-800 rounded-b-2xl px-4 py-3 text-left text-sm font-medium text-zinc-100 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 disabled:cursor-not-allowed disabled:text-zinc-500"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-300 font-semibold">
                <Copy className="size-5" aria-hidden="true" />
              </span>
              <span className="flex-1">Copiar link</span>
            </button>
            {supportsNativeShare && (
              <button
                type="button"
                disabled={!shareUrl}
                onClick={handleOtherShare}
                data-testid="share-other-button"
                aria-label={`Compartilhar o artigo ${title} em outros aplicativos`}
                className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm font-medium text-zinc-100 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 disabled:cursor-not-allowed disabled:text-zinc-500"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-purple-500/15 text-purple-300">
                  <MoreHorizontal className="size-5" aria-hidden="true" />
                </span>
                <span className="flex-1">Outros</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
