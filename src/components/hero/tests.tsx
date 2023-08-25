import { render, screen } from '@testing-library/react'
import Hero from '.'

describe('Hero component', () => {
  const data = {
    avatar: {
      alt: 'Placeholder avatar',
      src: 'https://i.pravatar.cc/528'
    },
    action: {
      label: 'Hero action',
      link: '/'
    },
    description: 'Hero description.',
    subtitle: 'Hero subtitle',
    title: 'Hero title'
  }

  beforeEach(() => {
    render(<Hero {...data} />)
  })

  it('should display an avatar', () => {
    const avatar = screen.getByRole('img')

    expect(avatar).toBeInTheDocument()
  })

  it('should display a subtitle', () => {
    const subtitle = screen.getByRole('heading', { level: 5 })

    expect(subtitle).toBeInTheDocument()
    expect(subtitle).toHaveTextContent(/subtitle/i)
  })

  it('should display a title', () => {
    const title = screen.getByRole('heading', { level: 1 })

    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/title/i)
  })

  it('should display a description', () => {
    const description = screen.getByRole('paragraph')

    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(/description/i)
  })

  it('should display an call to action', () => {
    const callToAction = screen.getByRole('link')

    expect(callToAction).toBeInTheDocument()
    expect(callToAction).toHaveTextContent(/action/i)
  })
})
