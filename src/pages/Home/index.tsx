import { Section } from '@/components/templates/Section'
import { Overview } from '@/components/organisms/Overview'
import { Transactions } from '@/components/organisms/Transactions'
import { OfferCard } from '@/components/molecules/OfferCard'

import styles from './styles.module.css'

export function Home() {
  return (
    <>
      <Section
        prefix="Olá,"
        title="João"
        subtitle="Seja bem vindo a sua conta digital!"
        direction="col"
      >
        <Overview />
      </Section>
      <div className={styles.sections}>
        <Section title="Conta digital" subtitle="Última movimentações">
          <Transactions />
        </Section>
        <Section title="Ofertas para você">
          <OfferCard />
        </Section>
      </div>
    </>
  )
}
