import { render, screen } from '@testing-library/react'

import { TransactionCard } from '.'

describe('TransactionCard component', () => {
  it('Should render correctly', () => {
    render(
      <TransactionCard
        movementId="1"
        compensationType="CREDIT"
        description="description"
        account="CURRENT"
        amount={100}
        datetime=""
      />
    )

    const descriptionCard = screen.getByText('description')

    expect(descriptionCard).toBeInTheDocument()
  })

  it('Should add income class if compensationType === CREDIT', () => {
    render(
      <TransactionCard
        movementId="1"
        compensationType="CREDIT"
        description="description"
        account="CURRENT"
        amount={100}
        datetime=""
      />
    )

    const amountCard = screen.getByText('+ R$ 100,00')

    expect(amountCard).toHaveClass('income')
  })

  it('Should add outcome class if compensationType === DEBIT', () => {
    render(
      <TransactionCard
        movementId="1"
        compensationType="DEBIT"
        description="description"
        account="CURRENT"
        amount={100}
        datetime=""
      />
    )

    const amountCard = screen.getByText('- R$ 100,00')

    expect(amountCard).toHaveClass('outcome')
  })
})
