import { ReactNode } from 'react'
import { ArrowForward } from '@/icons/ArrowForward'
import { formatValue } from '@/util'

import styles from './styles.module.css'

interface Props {
  icon: ReactNode
  name: string
  value: number
  label: string
  tag?: string
}

export function OverviewCard({ icon, name, value, label, tag }: Props) {
  const formattedValue = formatValue(value)

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.icon}>
          {icon}
          <p>{name}</p>
        </div>

        {tag && (
          <div className={styles.tag}>
            <p>{tag}</p>
          </div>
        )}
      </header>

      <footer>
        <span>{label}</span>

        <div className={styles.value}>
          <p>R$</p> <strong>{formattedValue}</strong>
        </div>
      </footer>

      <div className={styles.gradientEffect} />
      <ArrowForward className={styles.arrow} color="var(--secondary-pure)" />
    </div>
  )
}
