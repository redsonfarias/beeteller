import styles from './styles.module.css'

interface Props {
  width?: number
  height?: number
}

export function Skeleton({ width, height }: Props) {
  const skeletonStyles = {
    width: `${width}rem`,
    height: `${height}rem`
  }

  return <div className={styles.container} style={skeletonStyles} />
}
