import { useContext } from 'react'
import { AppContext } from '@/contexts/AppContext'
import { TransactionCard } from '@/components/molecules/TransactionCard'
import { TransactionCardSkeleton } from '@/components/molecules/TransactionCard/TransactionCardSkeleton'
import { ITransaction } from '@/@types'

import styles from './styles.module.css'

interface Props {
  transactions: ITransaction[]
}

export function Transactions({ transactions }: Props) {
  const { isLoading } = useContext(AppContext)

  const hasTransactions = transactions.length

  if (isLoading) {
    return (
      <div className={styles.container}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TransactionCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {hasTransactions ? (
        transactions.map((transaction) => (
          <TransactionCard
            key={transaction.movementId}
            description={transaction.description}
            compensationType={transaction.compensationType}
            amount={transaction.amount}
            account={transaction.account}
            datetime={transaction.datetime}
            movementId={transaction.movementId}
          />
        ))
      ) : (
        <div className={styles.message}>
          <p>Nenhuma movimentação encontrada</p>
        </div>
      )}
    </div>
  )
}
