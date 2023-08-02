import { render } from '@testing-library/react'
import Heading, { type HeadingProps } from '.'

describe('Heading component', () => {
  const LEVELS: Array<HeadingProps['level']> = [1, 2, 3, 4, 5, 6]

  LEVELS.forEach(level => {
    it(`should render as an h${level as number}`, () => {
      const { getByRole } = render(
        <Heading level={level} >{`Heading ${level as number}`}</Heading>
      )
      const heading = getByRole('heading', { level })

      expect(heading).toBeInTheDocument()
    })
  })

  it('should display a children', () => {
    const { getByRole } = render(<Heading>With children</Heading>)
    const withChildren = getByRole('heading')

    expect(withChildren).toHaveTextContent(/children/i)
  })

  it('should display the dark style', () => {
    const { getByRole } = render(<Heading>With dark style</Heading>)
    const withDarkStyle = getByRole('heading')

    expect(withDarkStyle).toMatchInlineSnapshot(`
      <h1
        class="font-serif font-bold text-dark text-5xl"
      >
        With dark style
      </h1>
    `)
  })

  it('should display the light style', () => {
    const { getByRole } = render(
      <Heading color='light'>With light style</Heading>
    )
    const withLightStyle = getByRole('heading')

    expect(withLightStyle).toMatchInlineSnapshot(`
      <h1
        class="font-serif font-bold text-light text-5xl"
      >
        With light style
      </h1>
    `)
  })

  it('should display the neutral style', () => {
    const { getByRole } = render(
      <Heading color='neutral'>With neutral style</Heading>
    )
    const withNeutralStyle = getByRole('heading')

    expect(withNeutralStyle).toMatchInlineSnapshot(`
      <h1
        class="font-serif font-bold text-neutral text-5xl"
      >
        With neutral style
      </h1>
    `)
  })
})
