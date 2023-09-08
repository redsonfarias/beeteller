import { render, screen } from '@testing-library/react'

import { ActionButton } from './index'

describe('ActionButton component', () => {
  it('Should render correctly', () => {
    render(<ActionButton>Click me</ActionButton>)

    const actionButton = screen.getByText('Click me')

    expect(actionButton).toBeInTheDocument()
  })

  it('Should add default class if active state false', () => {
    render(<ActionButton>Click me</ActionButton>)

    const actionButton = screen.getByText('Click me')

    expect(actionButton).toHaveClass('default')
  })

  it('Should add disabled class if disabled state true', () => {
    render(<ActionButton disabled>Click me</ActionButton>)

    const actionButton = screen.getByText('Click me')

    expect(actionButton).toHaveClass('disabled')
  })
})
