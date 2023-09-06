import { TransactionCard } from '@/components/molecules/TransactionCard'
import { TransactionCardSkeleton } from '@/components/molecules/TransactionCard/TransactionCardSkeleton'

import styles from './styles.module.css'

interface ITransaction {
  id: string
  description: string
  value: number
  type: 'income' | 'outcome'
  accountType: 'current' | 'investment'
}

export function Transactions() {
  const transactions: ITransaction[] = [
    {
      id: '1',
      type: 'income',
      accountType: 'current',
      description: 'Transferência via Pix recebida',
      value: 227.98
    },
    {
      id: '2',
      type: 'outcome',
      accountType: 'investment',
      description: 'Pagamento de boleto via Pix',
      value: 11.23
    },
    {
      id: '3',
      type: 'income',
      accountType: 'current',
      description: 'Dividendos IRDM11',
      value: 98.16
    },
    {
      id: '4',
      type: 'income',
      accountType: 'investment',
      description: 'Dividendos ALZR11',
      value: 77.13
    }
  ]

  const loading = false

  return (
    <div className={styles.container}>
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <TransactionCardSkeleton key={index} />
          ))
        : transactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              description={transaction.description}
              type={transaction.type}
              accountType={transaction.accountType}
              value={transaction.value}
            />
          ))}
    </div>
  )
}
