import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
}

export function ItemMenu({ active, children, ...props }: Props) {
  const variant = active ? 'active' : 'default'

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  )
}
