export type AccountType = 'CURRENT' | 'INVESTIMENT'
export type CompensationType = 'CREDIT' | 'DEBIT'

export interface IOffer {
  title: string
  subtitle: string
  amount: number
}

export interface IOverview {
  currentAccount: {
    balance: number
  }
  investimentAccount: {
    amount: number
  }
  creditCard: {
    currentInvoice: number
  }
}

export interface ITransaction {
  movementId: string
  account: AccountType
  compensationType: CompensationType
  description: string
  amount: number
  datetime: string
}

export interface IIcon {
  color?: string
  size?: number
  className?: string
}

export interface IItem {
  name: string
  skeletonWidth: number
}
