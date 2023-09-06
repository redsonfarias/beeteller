import { useState, useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { Shop } from '@/icons/Shop'
import image from '@/assets/offer.png'
import { Button } from '@/components/atoms/Button'
import { OfferCardSkeleton } from './OfferCardSkeleton'
import { IOffer } from '@/@types'

import styles from './styles.module.css'

export function OfferCard({ title, subtitle, amount }: IOffer) {
  const [isHover, setIsHover] = useState(false)
  const { isLoading } = useContext(AppContext)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  if (isLoading) {
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
        <p>{title}</p>

        <span>{subtitle}</span>

        <p className={styles.value}>
          R$ <span>{amount}</span>
        </p>

        <Button expand={isHover}>Ver oferta</Button>
      </div>
    </div>
  )
}
