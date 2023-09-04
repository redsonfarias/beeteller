import { Skeleton } from '@/components/atoms/Skeleton'
import styles from './styles.module.css'

export function TransactionCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Skeleton height={1.2} width={2} />
        <Skeleton width={8.75} />
      </div>
      <Skeleton width={12} />
      <Skeleton width={5.5} />
    </div>
  )
}
