import { ReactComponent as Logo } from '@/assets/logo.svg'
import { NavbarMenu } from '@/components/molecules/NavbarMenu'
import { NavbarActions } from '@/components/molecules/NavbarActions'

import styles from './styles.module.css'

const items = [
  { name: 'Home', skeletonWidth: 2.5 },
  { name: 'Extrato', skeletonWidth: 3.125 },
  { name: 'Area Pix', skeletonWidth: 3.5 },
  { name: 'Cartão de Crédito', skeletonWidth: 7.25 }
]

export function Navbar() {
  return (
    <div className={styles.container}>
      <Logo />
      <NavbarMenu items={items} />
      <NavbarActions />
    </div>
  )
}
