import { render, screen } from '@testing-library/react'

import { Button } from './index'

describe('Button component', () => {
  it('Should render correctly', () => {
    render(<Button>Ver oferta</Button>)

    const button = screen.getByText('Ver oferta')

    expect(button).toBeInTheDocument()
  })

  it('Should add default class if expand === false', () => {
    render(<Button>Ver oferta</Button>)

    const button = screen.getByText('Ver oferta')

    expect(button).toHaveClass('default')
  })

  it('Should add expand class if expand === true', () => {
    render(<Button expand>Ver oferta</Button>)

    const button = screen.getByText('Ver oferta')

    expect(button).toHaveClass('expand')
  })
})
