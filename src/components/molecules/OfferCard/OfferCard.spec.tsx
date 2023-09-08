import { render, screen } from '@testing-library/react'

import { AppContext } from '@/contexts/AppContext'
import { OfferCard } from '.'

describe('OfferCard component', () => {
  it('Should render correctly', () => {
    render(<OfferCard title="titulo" subtitle="subtitulo" amount={100} />)

    const offercard = screen.getByText('Ver oferta')

    expect(offercard).toBeInTheDocument()
  })

  it('Should not render if page is loading', () => {
    render(
      <AppContext.Provider value={{ isLoading: true, finishLoading: () => {} }}>
        <OfferCard title="titulo" subtitle="subtitulo" amount={100} />
      </AppContext.Provider>
    )

    const offercard = screen.queryByText('Ver oferta')

    expect(offercard).not.toBeInTheDocument()
  })
})
