import { ReactNode, ElementType } from 'react'

export interface ITextProps {
  children: ReactNode
  className?: string
  'data-test-id'?: string
  as?: ElementType // Adiciona suporte para elementos personalizados
}
