import { Wallet } from '@/icons/Wallet'
import { Graphic } from '@/icons/Graphic'
import { formatValue } from '@/util'
import { ITransaction } from '@/@types'

import styles from './styles.module.css'

export function TransactionCard({
  amount,
  description,
  account: accountType
}: ITransaction) {
  const formattedAmount = formatValue(amount)
  const amountStyle = Number(formattedAmount) < 0 ? 'outcome' : 'income'

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

      <p className={styles[amountStyle]}>R$ {formattedAmount}</p>
    </div>
  )
}
