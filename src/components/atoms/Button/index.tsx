import { ButtonHTMLAttributes } from 'react'
import { ArrowForward } from '@/icons/ArrowForward'

import styles from './styles.module.css'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  expand?: boolean
}

export function Button({ expand, children, ...props }: Props) {
  const variant = expand ? 'expand' : 'default'

  return (
    <button className={styles[variant]} {...props}>
      {children} <ArrowForward size={16} />
    </button>
  )
}
