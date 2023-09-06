import { Wallet } from '@/icons/Wallet'
import { Graphic } from '@/icons/Graphic'
import { formatValue } from '@/util'

import styles from './styles.module.css'

interface Props {
  description: string
  value: number
  type: 'income' | 'outcome'
  accountType: 'current' | 'investment'
}

export function TransactionCard({
  value,
  description,
  type,
  accountType
}: Props) {
  const prefix = type === 'income' ? '+' : '-'
  const formattedValue = `${prefix} R$ ${formatValue(value)}`

  const accounts = {
    current: {
      type: 'Conta corrente',
      icon: <Wallet />
    },
    investment: {
      type: 'Conta investmento',
      icon: <Graphic />
    }
  }
  const account = accounts[accountType]

  return (
    <div className={styles.container}>
      <div className={styles.accountType}>
        {account.icon}
        <p className={styles.accountName}>{account.type}</p>
      </div>

      <p>{description}</p>

      <p className={styles[type]}>{formattedValue}</p>
    </div>
  )
}
