import { render, screen } from '@testing-library/react'

import { Link } from './index'

describe('Link component', () => {
  it('Should render correctly', () => {
    render(<Link>Home</Link>)

    const link = screen.getByText('Home')

    expect(link).toBeInTheDocument()
  })

  it('Should add default class if active === false', () => {
    render(<Link>Home</Link>)

    const link = screen.getByText('Home')

    expect(link).toHaveClass('default')
  })

  it('Should add active class if active === true', () => {
    render(<Link active>Home</Link>)

    const link = screen.getByText('Home')

    expect(link).toHaveClass('active')
  })
})
