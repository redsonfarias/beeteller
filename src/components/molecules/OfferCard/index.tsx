import { useState } from 'react'
import { Shop } from '@/icons/Shop'
import image from '@/assets/offer.png'
import { Button } from '@/components/atoms/Button'
import { OfferCardSkeleton } from './OfferCardSkeleton'

import styles from './styles.module.css'

export function OfferCard() {
  const [isHover, setIsHover] = useState(false)

  const loading = false

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  if (loading) {
    return <OfferCardSkeleton />
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.image} src={image} alt="" />

      <Shop className={styles.icon} />

      <div className={styles.content}>
        <p>Empréstimo Beeteller</p>

        <span>Valor disponível de até</span>

        <p className={styles.value}>
          R$ <span>100.000,00</span>
        </p>

        <Button expand={isHover}>Ver oferta</Button>
      </div>
    </div>
  )
}
