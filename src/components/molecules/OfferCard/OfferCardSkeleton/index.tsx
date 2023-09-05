import { Skeleton } from '@/components/atoms/Skeleton'
import styles from './styles.module.css'

export function OfferCardSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.image} />

      <div className={styles.icon}>
        <Skeleton height={1.2} width={2} />
      </div>

      <div className={styles.content}>
        <div className={styles.row}>
          <Skeleton height={1} width={1.25} />
          <Skeleton height={1.25} width={7.75} />
        </div>

        <Skeleton width={10} />

        <Skeleton height={0.875} fullWidth />
      </div>

      <div className={styles.button}>
        <Skeleton width={4.25} />
      </div>
    </div>
  )
}
