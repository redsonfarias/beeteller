import { ActionIcon } from '@/components/atoms/ActionIcon'
import { ReactComponent as Notification } from '@/assets/icons/notification.svg'
import { ReactComponent as Menu } from '@/assets/icons/menu.svg'
import avatar from '@/assets/avatar.png'

import styles from './styles.module.css'

export function NavbarActions() {
  const loading = false
  const opacityIcon = loading ? 0.1 : 1

  return (
    <div className={styles.container}>
      <ActionIcon disabled={loading}>
        <Notification opacity={opacityIcon} />
      </ActionIcon>
      <ActionIcon disabled={loading}>
        <Menu opacity={opacityIcon} />
      </ActionIcon>
      <ActionIcon disabled={loading}>
        <img src={avatar} alt="" className={styles.avatar} />
      </ActionIcon>
    </div>
  )
}
