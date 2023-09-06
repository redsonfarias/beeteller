import { useState } from 'react'
import styles from './styles.module.css'

interface Props {
  loaded: boolean
}

export function Loaded({ loaded }: Props) {
  const [animationComplete, setAnimationComplete] = useState(false)

  const barStyle = animationComplete ? styles.hidden : ''

  function handleAnimationEnd() {
    setAnimationComplete(true)
  }

  if (!loaded) {
    return null
  }

  return (
    <div
      className={`${styles.container} ${barStyle}`}
      onAnimationEnd={handleAnimationEnd}
    />
  )
}
