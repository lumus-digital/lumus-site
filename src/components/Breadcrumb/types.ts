export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface IBreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}
