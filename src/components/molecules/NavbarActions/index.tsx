import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { ActionIcon } from '@/components/atoms/ActionIcon'
import { Notification } from '@/icons/Notification'
import { Menu } from '@/icons/Menu'
import avatar from '@/assets/avatar.png'

import styles from './styles.module.css'

export function NavbarActions() {
  const { isLoading } = useContext(AppContext)

  const colorIcon = isLoading ? 'var(--skeleton)' : ''

  return (
    <div className={styles.container}>
      <ActionIcon disabled={isLoading}>
        <Notification color={colorIcon} />
      </ActionIcon>

      <ActionIcon disabled={isLoading}>
        <Menu color={colorIcon} />
      </ActionIcon>

      <ActionIcon disabled={isLoading}>
        {!isLoading && <img src={avatar} alt="" className={styles.avatar} />}
      </ActionIcon>
    </div>
  )
}
