import { render, screen } from '@testing-library/react'

import { ActionButton } from './index'

describe('ActionButton component', () => {
  it('Should render correctly', () => {
    render(<ActionButton>Avatar</ActionButton>)

    const actionButton = screen.getByText('Avatar')

    expect(actionButton).toBeInTheDocument()
  })

  it('Should add default class if disabled === false', () => {
    render(<ActionButton>Avatar</ActionButton>)

    const actionButton = screen.getByText('Avatar')

    expect(actionButton).toHaveClass('default')
  })

  it('Should add disabled class if disabled === true', () => {
    render(<ActionButton disabled>Avatar</ActionButton>)

    const actionButton = screen.getByText('Avatar')

    expect(actionButton).toHaveClass('disabled')
  })
})
