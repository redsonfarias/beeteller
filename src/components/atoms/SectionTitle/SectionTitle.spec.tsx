import { render, screen } from '@testing-library/react'

import { SectionTitle } from '.'

describe('SectionTitle component', () => {
  it('Should render correctly', () => {
    render(
      <SectionTitle
        title="Redson"
        subtitle="Seja bem vindo a sua conta digital!"
        prefix="Olá"
      />
    )

    const title = screen.getByText('Redson')
    const subtitle = screen.getByText('Seja bem vindo a sua conta digital!')
    const prefix = screen.getByText('Olá')

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
    expect(prefix).toBeInTheDocument()
  })
})
