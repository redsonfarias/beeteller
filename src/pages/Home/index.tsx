import { Section } from '@/components/templates/Section'
import { Overview } from '@/components/organisms/Overview'

import styles from './styles.module.css'

export function Home() {
  const overviewTitle = (
    <>
      <p className={styles.textFlex}>
        <span>Olá,</span>
        <span className={styles.title}>João</span>
      </p>

      <p className={styles.graySm}>Seja bem vindo a sua conta digital!</p>
    </>
  )

  return (
    <Section title={overviewTitle}>
      <Overview />
    </Section>
  )
}
