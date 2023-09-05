import { Wallet } from '@/icons/Wallet'
import { Graphic } from '@/icons/Graphic'
import { CreditCard } from '@/icons/CreditCard'
import { OverviewCard } from '@/components/molecules/OverviewCard'
import { OverviewCardSkeleton } from '@/components/molecules/OverviewCard/OverviewCardSkeleton'

import styles from './styles.module.css'

export function Overview() {
  const items = [
    {
      icon: <Wallet color="var(--secondary-pure)" />,
      name: 'Conta corrente',
      value: 122892,
      label: 'Saldo disponível'
    },
    {
      icon: <Graphic color="var(--secondary-pure)" />,
      name: 'Investimentos',
      value: 33212.46,
      label: 'Patrimônio'
    },
    {
      icon: <CreditCard color="var(--secondary-pure)" />,
      name: 'Cartão',
      value: 2432.11,
      label: 'Fatura Atual',
      tag: 'Fatura aberta'
    }
  ]

  const loading = false

  return (
    <div className={styles.container}>
      {items.map((item) =>
        loading ? (
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
