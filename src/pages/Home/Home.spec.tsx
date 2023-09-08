import { render, screen } from '@testing-library/react'

import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { AppContext } from '@/contexts/AppContext'
import { Home } from '.'

const server = setupServer(
  rest.get(
    'https://beeteller.free.beeceptor.com/dashboard',
    async (_req, res, ctx) => {
      return res(
        ctx.json({
          currentAccount: {
            balance: 130981.2
          },
          investimentAccount: {
            amount: 33817.8
          },
          creditCard: {
            currentInvoice: 2631.09
          }
        })
      )
    }
  ),
  rest.get(
    'https://beeteller.free.beeceptor.com/movement',
    async (_req, res, ctx) => {
      return res(
        ctx.json([
          {
            movementId: 103912,
            account: 'CURRENT',
            compensationType: 'CREDIT',
            description: 'Pix recebido - João José Marques',
            amount: 227.98,
            datetime: '2023-03-01T15:10:03-03:00'
          },
          {
            movementId: 817291,
            account: 'CURRENT',
            compensationType: 'DEBIT',
            description: 'Pix enviado - Yuri José',
            amount: 5000.0,
            datetime: '2023-02-20T10:10:03-03:00'
          }
        ])
      )
    }
  ),
  rest.get(
    'https://beeteller.free.beeceptor.com/offers',
    async (_req, res, ctx) => {
      return res(
        ctx.json({
          offers: [
            {
              offerType: 'loan',
              title: 'Empréstimo Beeteller',
              subtitle: 'Valor disponível de até',
              amount: 100.0
            }
          ]
        })
      )
    }
  )
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

describe('Home component', () => {
  it('Should render correctly', async () => {
    render(
      <AppContext.Provider
        value={{ isLoading: false, finishLoading: () => {} }}
      >
        <Home />
      </AppContext.Provider>
    )

    const currentAccount = await screen.findByText('130.981,20')
    const transactionDescription = await screen.findByText(
      'Pix recebido - João José Marques'
    )
    const offerTitle = await screen.findByText('Empréstimo Beeteller')

    expect(currentAccount).toBeInTheDocument()
    expect(transactionDescription).toBeInTheDocument()
    expect(offerTitle).toBeInTheDocument()
  })
})
