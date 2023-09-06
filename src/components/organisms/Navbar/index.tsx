import { useState } from 'react'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { NavbarMenu } from '@/components/molecules/NavbarMenu'
import { NavbarActions } from '@/components/molecules/NavbarActions'
import { MenuButton } from '@/components/atoms/MenuButton'
import { MobileMenu } from '@/components/molecules/MobileMenu'

import styles from './styles.module.css'

const items = [
  { name: 'Home', skeletonWidth: 2.5 },
  { name: 'Extrato', skeletonWidth: 3.125 },
  { name: 'Area Pix', skeletonWidth: 3.5 },
  { name: 'Cartão de Crédito', skeletonWidth: 7.25 }
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  function toggleMenu() {
    setOpen((state) => !state)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <MenuButton open={open} onClick={toggleMenu} />

          <Logo />
        </div>

        <NavbarMenu items={items} />

        <NavbarActions />
      </div>

      <MobileMenu items={items} open={open} />
    </>
  )
}
