import { useContext, useEffect } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { useFetch } from '@/hooks/useFetch'
import { Section } from '@/components/templates/Section'
import { Overview } from '@/components/organisms/Overview'
import { Transactions } from '@/components/organisms/Transactions'
import { OfferCard } from '@/components/molecules/OfferCard'
import { IOffer, IOverview, ITransaction } from '@/@types'
import { OFFER_INITIAL_STATE, OVERVIEW_INITIAL_STATE } from '@/util/constants'

import styles from './styles.module.css'

export function Home() {
  const { finishLoading } = useContext(AppContext)

  const { data: overviewData, isFetching: isFetchingOverview } =
    useFetch<IOverview>('/dashboard')

  const { data: transactionsData, isFetching: isFetchingTransactions } =
    useFetch<ITransaction[]>('/movement')

  const { data: offersData, isFetching: isFetchingOffers } = useFetch<{
    offers: IOffer[]
  }>('/offers')

  useEffect(() => {
    if (!isFetchingOverview && !isFetchingTransactions && !isFetchingOffers) {
      finishLoading()
    }
  }, [
    isFetchingOverview,
    isFetchingTransactions,
    isFetchingOffers,
    finishLoading
  ])

  const overview = overviewData ?? OVERVIEW_INITIAL_STATE
  const transactions = transactionsData ?? []
  const offer = offersData?.offers[0] ?? OFFER_INITIAL_STATE

  return (
    <>
      <Section
        prefix="Olá,"
        title="Redson"
        subtitle="Seja bem vindo a sua conta digital!"
        direction="col"
      >
        <Overview
          creditCard={overview.creditCard}
          currentAccount={overview.currentAccount}
          investimentAccount={overview.investimentAccount}
        />
      </Section>

      <div className={styles.sections}>
        <Section title="Conta digital" subtitle="Últimas movimentações">
          <Transactions transactions={transactions} />
        </Section>

        <Section title="Ofertas para você">
          <OfferCard
            title={offer.title}
            subtitle={offer.subtitle}
            amount={offer.amount}
          />
        </Section>
      </div>
    </>
  )
}
