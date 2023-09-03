import { ReactNode } from 'react'

import styles from './styles.module.css'

interface Props {
  children?: ReactNode
  disabled?: boolean
}

export function ActionIcon({ children, disabled = false }: Props) {
  const variant = disabled ? 'disabled' : 'container'

  return <div className={styles[variant]}>{children}</div>
}
