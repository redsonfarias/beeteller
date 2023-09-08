import { render, screen } from '@testing-library/react'

import { AppContext } from '@/contexts/AppContext'
import { Overview } from '.'

const currentAccount = {
  balance: 130000.2
}
const investimentAccount = {
  amount: 33000
}

const creditCard = {
  currentInvoice: 2000.09
}

describe('Overview component', () => {
  it('Should render correctly', () => {
    render(
      <Overview
        creditCard={creditCard}
        currentAccount={currentAccount}
        investimentAccount={investimentAccount}
      />
    )

    const currentAccountValue = screen.getByText('130.000,20')
    const creditCardValue = screen.getByText('2.000,09')
    const investimentAccountValue = screen.getByText('33.000,00')

    expect(currentAccountValue).toBeInTheDocument()
    expect(creditCardValue).toBeInTheDocument()
    expect(investimentAccountValue).toBeInTheDocument()
  })

  it('Should not render if page is loading', () => {
    render(
      <AppContext.Provider value={{ isLoading: true, finishLoading: () => {} }}>
        <Overview
          creditCard={creditCard}
          currentAccount={currentAccount}
          investimentAccount={investimentAccount}
        />
      </AppContext.Provider>
    )

    const currentAccountValue = screen.queryByText('130.000,20')
    const creditCardValue = screen.queryByText('2.000,09')
    const investimentAccountValue = screen.queryByText('33.000,00')

    expect(currentAccountValue).not.toBeInTheDocument()
    expect(creditCardValue).not.toBeInTheDocument()
    expect(investimentAccountValue).not.toBeInTheDocument()
  })
})
