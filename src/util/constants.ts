import { IOffer, IOverview } from '@/@types'

export const OVERVIEW_INITIAL_STATE: IOverview = {
  creditCard: { currentInvoice: 0 },
  currentAccount: { balance: 0 },
  investimentAccount: { amount: 0 }
}

export const OFFER_INITIAL_STATE: IOffer = {
  title: '',
  subtitle: '',
  amount: 0
}
