import { ReactComponent as Wallet } from '@/assets/icons/yellow-wallet.svg'
import { ReactComponent as Graphic } from '@/assets/icons/yellow-graphic.svg'
import { ReactComponent as CreditCard } from '@/assets/icons/yellow-credit-card.svg'
import { OverviewCard } from '@/components/molecules/OverviewCard'
import { OverviewCardSkeleton } from '@/components/molecules/OverviewCard/OverviewCardSkeleton'

import styles from './styles.module.css'

export function Overview() {
  const items = [
    {
      icon: <Wallet />,
      name: 'Conta corrente',
      value: 122892,
      label: 'Saldo disponível'
    },
    {
      icon: <Graphic />,
      name: 'Investimentos',
      value: 33212.46,
      label: 'Patrimônio'
    },
    {
      icon: <CreditCard />,
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
