import { render, screen } from '@testing-library/react'

import { AppContext } from '@/contexts/AppContext'
import { NavbarMenu } from './index'

const items = [
  { name: 'Home', skeletonWidth: 2.5 },
  { name: 'Extrato', skeletonWidth: 3.125 },
  { name: 'Area Pix', skeletonWidth: 3.5 },
  { name: 'Cartão de Crédito', skeletonWidth: 6 }
]

describe('NavbarMenu component', () => {
  it('Should render correctly', () => {
    render(
      <AppContext.Provider
        value={{ isLoading: false, finishLoading: () => {} }}
      >
        <NavbarMenu items={items} handleActiveLink={() => {}} />
      </AppContext.Provider>
    )

    items.forEach((item) => {
      const itemText = screen.queryByText(`${item.name}`)
      expect(itemText).toBeInTheDocument()
    })
  })

  it('Should not render if page is loading', () => {
    render(
      <AppContext.Provider value={{ isLoading: true, finishLoading: () => {} }}>
        <NavbarMenu items={items} handleActiveLink={() => {}} />
      </AppContext.Provider>
    )

    items.forEach((item) => {
      const itemText = screen.queryByText(`${item.name}`)
      expect(itemText).not.toBeInTheDocument()
    })
  })
})
