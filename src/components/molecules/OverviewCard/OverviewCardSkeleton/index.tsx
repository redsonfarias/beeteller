import { Skeleton } from '@/components/atoms/Skeleton'

import styles from './styles.module.css'

export function OverviewCardSkeleton() {
  return (
    <div className={styles.container}>
      <header>
        <Skeleton width={6.25} />
      </header>
      <footer>
        <Skeleton width={6.5} />
        <div className={styles.row}>
          <Skeleton />
          <Skeleton width={10} height={1.75} />
        </div>
      </footer>
    </div>
  )
}
