import { render, screen } from '@testing-library/react'

import { OverviewCard } from '.'
import { Wallet } from '@/icons/Wallet'

describe('OverviewCard component', () => {
  it('Should render correctly', () => {
    render(
      <OverviewCard icon={<Wallet />} name="name" label="label" value={100} />
    )

    const nameCard = screen.getByText('name')
    const labelCard = screen.getByText('label')
    const valueCard = screen.getByText('100,00')

    expect(nameCard).toBeInTheDocument()
    expect(labelCard).toBeInTheDocument()
    expect(valueCard).toBeInTheDocument()
  })
})
