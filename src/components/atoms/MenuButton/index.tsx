import { Close } from '@/icons/Close'
import { HamburguerMenu } from '@/icons/HamburguerMenu'

import styles from './styles.module.css'

interface Props {
  open: boolean
  onClick?: () => void
}

export function MenuButton({ open, onClick }: Props) {
  return (
    <div className={styles.container} onClick={onClick}>
      {open ? <Close /> : <HamburguerMenu />}
    </div>
  )
}
