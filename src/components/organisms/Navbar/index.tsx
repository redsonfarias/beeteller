import { useState, useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { ReactComponent as Logo } from '@/assets/logo.svg'
import { NavbarMenu } from '@/components/molecules/NavbarMenu'
import { NavbarActions } from '@/components/molecules/NavbarActions'
import { MenuButton } from '@/components/atoms/MenuButton'
import { MobileMenu } from '@/components/molecules/MobileMenu'
import { Loaded } from '@/components/atoms/Loaded'

import styles from './styles.module.css'

const items = [
  { name: 'Home', skeletonWidth: 2.5 },
  { name: 'Extrato', skeletonWidth: 3.125 },
  { name: 'Area Pix', skeletonWidth: 3.5 },
  { name: 'Cartão de Crédito', skeletonWidth: 6 }
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(items[0].name)

  const { isLoading } = useContext(AppContext)

  function toggleMenu() {
    setIsOpen((state) => !state)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <MenuButton open={isOpen} onClick={toggleMenu} />
          <Logo />
        </div>

        <NavbarMenu
          items={items}
          activeLink={activeLink}
          handleActiveLink={setActiveLink}
        />
        <NavbarActions />
      </div>
      <Loaded loaded={!isLoading} />

      <MobileMenu
        isOpen={isOpen}
        items={items}
        activeLink={activeLink}
        handleActiveLink={setActiveLink}
      />
    </>
  )
}
