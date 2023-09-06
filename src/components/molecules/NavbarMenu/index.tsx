import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { ItemMenu } from '@/components/atoms/ItemMenu'
import { Skeleton } from '@/components/atoms/Skeleton'
import { IItem } from '@/@types'

import styles from './styles.module.css'

interface Props {
  items: IItem[]
  activeLink?: string
  handleActiveLink: (name: string) => void
}

export function NavbarMenu({ items, activeLink, handleActiveLink }: Props) {
  const { isLoading } = useContext(AppContext)

  const variant = isLoading ? 'menuSkeletons' : 'menu'

  return (
    <div className={styles[variant]}>
      {items.map((item) =>
        isLoading ? (
          <Skeleton key={item.name} width={item.skeletonWidth} />
        ) : (
          <ItemMenu
            key={item.name}
            active={item.name === activeLink}
            onClick={() => handleActiveLink(item.name)}
          >
            {item.name}
          </ItemMenu>
        )
      )}
    </div>
  )
}
