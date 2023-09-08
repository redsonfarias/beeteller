import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { ActionButton } from '@/components/atoms/ActionButton'
import { Notification } from '@/icons/Notification'
import { Menu } from '@/icons/Menu'
import avatar from '@/assets/avatar.png'

import styles from './styles.module.css'

export function NavbarActions() {
  const { isLoading } = useContext(AppContext)

  const colorIcon = isLoading ? 'var(--skeleton)' : ''

  return (
    <div className={styles.container}>
      <ActionButton disabled={isLoading}>
        <Notification color={colorIcon} />
      </ActionButton>

      <ActionButton disabled={isLoading}>
        <Menu color={colorIcon} />
      </ActionButton>

      <ActionButton disabled={isLoading}>
        {!isLoading && <img src={avatar} alt="" className={styles.avatar} />}
      </ActionButton>
    </div>
  )
}
