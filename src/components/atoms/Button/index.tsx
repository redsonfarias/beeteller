import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  expand?: boolean
}

export function Button({ expand, children, ...props }: Props) {
  const variant = expand ? 'expand' : 'default'

  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  )
}
