import { ReactNode } from 'react'
import { SectionTitle } from '@/components/atoms/SectionTitle'

import styles from './styles.module.css'

interface Props {
  title: string
  subtitle?: string
  prefix?: string
  direction?: 'row' | 'col'
  children: ReactNode
}

export function Section({
  title,
  subtitle,
  prefix,
  direction,
  children
}: Props) {
  return (
    <div className={styles.container}>
      <SectionTitle
        title={title}
        prefix={prefix}
        subtitle={subtitle}
        direction={direction}
      />
      {children}
    </div>
  )
}
