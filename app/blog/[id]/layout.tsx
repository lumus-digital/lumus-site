// Necessário para rotas dinâmicas funcionarem corretamente no App Router do Next.js
import type { ReactNode } from 'react'

export default function BlogDetailLayout({
  children,
}: {
  children: ReactNode
}) {
  return children
}
