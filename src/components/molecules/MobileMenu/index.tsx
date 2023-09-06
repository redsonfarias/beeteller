import { Skeleton } from '@/components/atoms/Skeleton'
import { IItem } from '@/@types'

import styles from './styles.module.css'

interface Props {
  isOpen: boolean
  items: IItem[]
  activeLink: string
  handleActiveLink: (name: string) => void
}

export function MobileMenu({
  isOpen,
  items,
  activeLink,
  handleActiveLink
}: Props) {
  const loading = false

  const variant = isOpen ? 'activeSidebar' : 'sidebar'

  function linkStyle(linkName: string) {
    return linkName === activeLink ? 'activeLink' : 'link'
  }

  return (
    <div className={styles[variant]}>
      {items.map((item) =>
        loading ? (
          <div key={item.name} style={{ marginTop: 8 }}>
            <Skeleton height={1} width={item.skeletonWidth} />
          </div>
        ) : (
          <p
            key={item.name}
            onClick={() => handleActiveLink(item.name)}
            className={styles[linkStyle(item.name)]}
          >
            {item.name}
          </p>
        )
      )}
    </div>
  )
}
