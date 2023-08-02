import { render } from '@testing-library/react'
import Body from '.'

describe('Body component', () => {
  it('should render as a paragraph', () => {
    const { getByRole } = render(<Body>As a paragraph.</Body>)
    const paragraph = getByRole('paragraph')

    expect(paragraph).toBeInTheDocument()
  })

  it('should display a children', () => {
    const { getByRole } = render(<Body>With children.</Body>)
    const withChildren = getByRole('paragraph')

    expect(withChildren).toHaveTextContent(/children/i)
  })

  it('should display the default style', () => {
    const { getByRole } = render(<Body>With default style.</Body>)
    const withDefaultStyle = getByRole('paragraph')

    expect(withDefaultStyle).toMatchInlineSnapshot(`
      <p
        class="font-sans mb-8 text-dark text-base"
        role="paragraph"
      >
        With default style.
      </p>
    `)
  })

  it('should display the big style', () => {
    const { getByRole } = render(<Body size='big'>With big style.</Body>)
    const withBigStyle = getByRole('paragraph')

    expect(withBigStyle).toMatchInlineSnapshot(`
      <p
        class="font-sans mb-8 text-dark text-xl"
        role="paragraph"
      >
        With big style.
      </p>
    `)
  })

  it('should display the light style', () => {
    const { getByRole } = render(<Body color='light'>With light style.</Body>)
    const withLightStyle = getByRole('paragraph')

    expect(withLightStyle).toMatchInlineSnapshot(`
      <p
        class="font-sans mb-8 text-light text-base"
        role="paragraph"
      >
        With light style.
      </p>
    `)
  })

  it('should display the neutral style', () => {
    const { getByRole } = render(<Body color='neutral'>With neutral style.</Body>)
    const withNeutralStyle = getByRole('paragraph')

    expect(withNeutralStyle).toMatchInlineSnapshot(`
      <p
        class="font-sans mb-8 text-neutral text-base"
        role="paragraph"
      >
        With neutral style.
      </p>
    `)
  })
})
