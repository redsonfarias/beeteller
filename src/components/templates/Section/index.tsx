import { ReactNode } from 'react'

import styles from './styles.module.css'

interface Props {
  title: ReactNode
  children: ReactNode
}

export function Section({ title, children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      {children}
    </div>
  )
}
