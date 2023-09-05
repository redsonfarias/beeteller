import { useState } from 'react'
import { ReactComponent as Shop } from '@/assets/icons/shop.svg'
import { ReactComponent as ArrowRight } from '@/assets/icons/black-arrow-right.svg'
import image from '@/assets/offer.png'
import { Button } from '@/components/atoms/Button'

import styles from './styles.module.css'

export function OfferCard() {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
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

        <Button expand={isHover}>
          Ver oferta <ArrowRight />
        </Button>
      </div>
    </div>
  )
}
