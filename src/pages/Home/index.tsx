import { Section } from '@/components/templates/Section'
import { Overview } from '@/components/organisms/Overview'
import { Transactions } from '@/components/organisms/Transactions'

import styles from './styles.module.css'

export function Home() {
  const overviewTitle = (
    <>
      <p className={styles.flexText}>
        <span>Olá,</span>
        <span className={styles.title}>João</span>
      </p>

      <p className={styles.subtitle}>Seja bem vindo a sua conta digital!</p>
    </>
  )

  const transactionsTitle = (
    <>
      <span className={styles.title}>Conta digital</span>
      <span className={styles.subtitle}>Últimas movimentações</span>
    </>
  )

  const offersTitle = <p className={styles.title}>Ofertas para você</p>

  return (
    <>
      <Section title={overviewTitle}>
        <Overview />
      </Section>
      <div className={styles.sections}>
        <Section title={transactionsTitle}>
          <Transactions />
        </Section>
        <Section title={offersTitle}>
          <></>
        </Section>
      </div>
    </>
  )
}
