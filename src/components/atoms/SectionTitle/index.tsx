import styles from './styles.module.css'

interface Props {
  title: string
  subtitle?: string
  prefix?: string
  direction?: 'row' | 'col'
}

export function SectionTitle({
  title,
  subtitle,
  prefix,
  direction = 'row'
}: Props) {
  return (
    <div className={styles[direction]}>
      <p>
        {prefix && <span>{prefix}</span>}
        <strong>{title}</strong>
      </p>

      <p>{subtitle}</p>
    </div>
  )
}
