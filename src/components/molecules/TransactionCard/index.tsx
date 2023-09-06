import { Wallet } from '@/icons/Wallet'
import { Graphic } from '@/icons/Graphic'
import { formatValue } from '@/util'
import { ITransaction } from '@/@types'

import styles from './styles.module.css'

export function TransactionCard({
  amount,
  description,
  account: accountType,
  compensationType
}: ITransaction) {
  const amountType = compensationType === 'DEBIT' ? 'outcome' : 'income'
  const prefix = amountType === 'income' ? '+' : '-'
  const formattedAmount = `${prefix} R$ ${formatValue(amount)}`

  const accounts = {
    CURRENT: {
      type: 'Conta corrente',
      icon: <Wallet />
    },
    INVESTIMENT: {
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

      <p className={styles[amountType]}>{formattedAmount}</p>
    </div>
  )
}
