import { render, screen } from '@testing-library/react'

import { Link } from './index'

describe('Link component', () => {
  it('Should render correctly', () => {
    render(<Link>Click me</Link>)

    const link = screen.getByText('Click me')

    expect(link).toBeInTheDocument()
  })

  it('Should add default class if active state false', () => {
    render(<Link>Click me</Link>)

    const link = screen.getByText('Click me')

    expect(link).toHaveClass('default')
  })

  it('Should add active class if active state true', () => {
    render(<Link active>Click me</Link>)

    const link = screen.getByText('Click me')

    expect(link).toHaveClass('active')
  })
})
