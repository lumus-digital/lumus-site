import React from 'react'

export interface IButtonProps {
  as?: 'button' | 'a'
  href?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'danger' // Add variants for button styles
  children?: React.ReactNode // Make children optional for icon-only buttons
  icon?: React.ReactNode // Add an icon prop
  onClick?: React.MouseEventHandler<HTMLElement> // Simplified event handler
  disabled?: boolean
  'aria-label'?: string // Explicitly define aria-label as an optional prop
  'data-test-id'?: string // Add data-test-id for testing purposes
}
