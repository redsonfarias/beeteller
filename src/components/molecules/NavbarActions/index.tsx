import { ActionIcon } from '@/components/atoms/ActionIcon'
import { Notification } from '@/icons/Notification'
import { Menu } from '@/icons/Menu'
import avatar from '@/assets/avatar.png'

import styles from './styles.module.css'

export function NavbarActions() {
  const loading = false
  const colorIcon = loading ? 'var(--skeleton)' : ''

  return (
    <div className={styles.container}>
      <ActionIcon disabled={loading}>
        <Notification color={colorIcon} />
      </ActionIcon>

      <ActionIcon disabled={loading}>
        <Menu color={colorIcon} />
      </ActionIcon>

      <ActionIcon disabled={loading}>
        <img src={avatar} alt="" className={styles.avatar} />
      </ActionIcon>
    </div>
  )
}
