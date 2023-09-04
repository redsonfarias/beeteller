import { ReactNode } from 'react'
import { ReactComponent as ArrowRight } from '@/assets/icons/yellow-arrow-right.svg'

import styles from './styles.module.css'

interface Props {
  icon: ReactNode
  name: string
  value: number
  label: string
  tag?: string
}

export function OverviewCard({ icon, name, value, label, tag }: Props) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2
  }).format(value)

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
      <ArrowRight className={styles.arrow} />
    </div>
  )
}
