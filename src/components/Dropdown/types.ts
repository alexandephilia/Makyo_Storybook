import type { ReactNode } from 'react'

export type DropdownOption = {
  value: string
  label: string
  icon?: ReactNode
  disabled?: boolean
}

export type DropdownProps = {
  options: DropdownOption[]
  value?: string | string[]
  onChange?: (value: string | string[] | undefined) => void
  placeholder?: string
  searchable?: boolean
  multiple?: boolean
  portal?: boolean
  disabled?: boolean
  loading?: boolean
  error?: string
  label?: string
  className?: string
  menuClassName?: string
  renderOption?: (option: DropdownOption, isSelected: boolean) => ReactNode
  zIndex?: number
}
