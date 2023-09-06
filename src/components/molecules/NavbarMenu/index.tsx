import { useState } from 'react'
import { ItemMenu } from '@/components/atoms/ItemMenu'
import { Skeleton } from '@/components/atoms/Skeleton'
import { IItem } from '@/@types'

import styles from './styles.module.css'

interface Props {
  items: IItem[]
}

export function NavbarMenu({ items }: Props) {
  const [active, setActive] = useState(items[0].name)

  const loading = false
  const variant = loading ? 'menuSkeletons' : 'menu'

  return (
    <div className={styles[variant]}>
      {items.map((item) =>
        loading ? (
          <Skeleton key={item.name} width={item.skeletonWidth} />
        ) : (
          <ItemMenu
            key={item.name}
            active={active === item.name}
            onClick={() => setActive(item.name)}
          >
            {item.name}
          </ItemMenu>
        )
      )}
    </div>
  )
}
