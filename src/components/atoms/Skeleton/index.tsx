import styles from './styles.module.css'

interface Props {
  width?: number
  height?: number
  fullWidth?: boolean
}

export function Skeleton({ width = 1.125, height = 0.75, fullWidth }: Props) {
  const skeletonStyles = {
    width: fullWidth ? '100%' : `${width}rem`,
    height: `${height}rem`
  }

  return <div className={styles.container} style={skeletonStyles} />
}
