import { ReactNode } from 'react'

export type LinkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export default interface ILinkProps {
  to: string
  isExternal?: boolean
  size?: LinkSize
  className?: string
  children?: ReactNode
  icon?: ReactNode
  onClick?: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
  ) => void
  'aria-label'?: string
  'data-test-id'?: string
}
