import { ReactNode } from 'react'

import styles from './styles.module.css'

interface Props {
  children?: ReactNode
  disabled?: boolean
}

export function ActionButton({ children, disabled = false }: Props) {
  const variant = disabled ? 'disabled' : 'default'

  return <button className={styles[variant]}>{children}</button>
}
