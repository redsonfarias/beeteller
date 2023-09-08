import { render, screen } from '@testing-library/react'

import { Navbar } from '.'

describe('Navbar component', () => {
  it('Should render correctly', () => {
    render(<Navbar />)

    expect(screen.getAllByText('Home')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Extrato')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Area Pix')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Cartão de Crédito')[0]).toBeInTheDocument()
  })
})
