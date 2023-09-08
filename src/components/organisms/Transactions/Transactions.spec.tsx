import { render, screen } from '@testing-library/react'

import { AppContext } from '@/contexts/AppContext'
import { Transactions } from '.'
import { ITransaction } from '@/@types'

const transactions: ITransaction[] = [
  {
    movementId: '1',
    account: 'CURRENT',
    compensationType: 'CREDIT',
    description: 'Pix recebido - João José Marques',
    amount: 227.98,
    datetime: '2023-03-01T15:10:03-03:00'
  },
  {
    movementId: '2',
    account: 'CURRENT',
    compensationType: 'DEBIT',
    description: 'Pix enviado - Yuri José',
    amount: 5000.0,
    datetime: '2023-02-20T10:10:03-03:00'
  },
  {
    movementId: '3',
    account: 'INVESTIMENT',
    compensationType: 'CREDIT',
    description: 'Dividendos recebidos - IRDM11',
    amount: 1200.0,
    datetime: '2023-02-17T10:10:03-03:00'
  },
  {
    movementId: '4',
    account: 'INVESTIMENT',
    compensationType: 'CREDIT',
    description: 'Dividendos recebidos - ALZR11',
    amount: 700.95,
    datetime: '2023-02-16T10:10:03-03:00'
  }
]

describe('Transactions component', () => {
  it('Should render correctly', () => {
    render(<Transactions transactions={transactions} />)

    transactions.forEach((transaction) => {
      const transactionText = screen.getByText(transaction.description)
      expect(transactionText).toBeInTheDocument()
    })
  })

  it('Should not render if page is loading', () => {
    render(
      <AppContext.Provider value={{ isLoading: true, finishLoading: () => {} }}>
        <Transactions transactions={transactions} />
      </AppContext.Provider>
    )

    transactions.forEach((transaction) => {
      const transactionText = screen.queryByText(transaction.description)
      expect(transactionText).not.toBeInTheDocument()
    })
  })
})
