import { IItem } from '@/@types'

import styles from './styles.module.css'

interface Props {
  items: IItem[]
  open?: boolean
}

export function MobileMenu({ items, open }: Props) {
  const variant = open ? 'sidebarActive' : 'sidebar'

  return (
    <div className={styles[variant]}>
      {items.map((item) => (
        <p key={item.name}>{item.name}</p>
      ))}
    </div>
  )
}
