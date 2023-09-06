import { Skeleton } from '@/components/atoms/Skeleton'
import styles from './styles.module.css'

export function TransactionCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Skeleton height={1.2} width={2} />

        <div className={styles.accountName}>
          <Skeleton width={8} />
        </div>
      </div>

      <div className={styles.description}>
        <Skeleton width={12} />
      </div>

      <Skeleton width={4.5} />
    </div>
  )
}
