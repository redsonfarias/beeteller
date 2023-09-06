import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { Wallet } from '@/icons/Wallet'
import { Graphic } from '@/icons/Graphic'
import { CreditCard } from '@/icons/CreditCard'
import { OverviewCard } from '@/components/molecules/OverviewCard'
import { OverviewCardSkeleton } from '@/components/molecules/OverviewCard/OverviewCardSkeleton'
import { IOverview } from '@/@types'

import styles from './styles.module.css'

export function Overview({
  creditCard,
  currentAccount,
  investimentAccount
}: IOverview) {
  const { isLoading } = useContext(AppContext)

  const items = [
    {
      icon: <Wallet color="var(--secondary-pure)" />,
      name: 'Conta corrente',
      value: currentAccount.balance,
      label: 'Saldo disponível'
    },
    {
      icon: <Graphic color="var(--secondary-pure)" />,
      name: 'Investimentos',
      value: investimentAccount.amount,
      label: 'Patrimônio'
    },
    {
      icon: <CreditCard color="var(--secondary-pure)" />,
      name: 'Cartão',
      value: creditCard.currentInvoice,
      label: 'Fatura Atual',
      tag: 'Fatura aberta'
    }
  ]

  return (
    <div className={styles.container}>
      {items.map((item) =>
        isLoading ? (
          <OverviewCardSkeleton key={item.name} />
        ) : (
          <OverviewCard
            key={item.name}
            icon={item.icon}
            name={item.name}
            label={item.label}
            value={item.value}
            tag={item.tag}
          />
        )
      )}
    </div>
  )
}
