import { fireEvent, render } from '@testing-library/react'
import Button from '.'

describe('Button component', () => {
  describe('when an anchor', () => {
    it('should render properly', () => {
      const { getByRole } = render(
        <Button as='a'>Anchor</Button>
      )

      expect(getByRole('link', { name: /anchor/i })).toBeInTheDocument()
    })

    it('should render with children', () => {
      const { getByText } = render(
        <Button as='a'>Children</Button>
      )
      const children = getByText(/children/i)

      expect(children).toBeInTheDocument()
    })

    it('should link to an address', () => {
      const { getByRole } = render(
        <Button as='a' href='/link'>Link</Button>
      )
      const link = getByRole('link', { name: /link/i })

      expect(link).toHaveAttribute('href', '/link')
    })

    it('should display as the accent style', () => {
      const { getByRole } = render(
        <Button as='a' href='/anchor'>Accent</Button>
      )

      expect(getByRole('link', { name: /accent/i })).toMatchInlineSnapshot(`
        <a
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-secondary text-light "
          href="/anchor"
          role="link"
        >
          Accent
        </a>
      `)
    })

    it('should display as the dark style', () => {
      const { getByRole } = render(
        <Button as='a' href='/anchor' variant='dark'>Dark</Button>
      )

      expect(getByRole('link', { name: /dark/i })).toMatchInlineSnapshot(`
        <a
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-light text-dark "
          href="/anchor"
          role="link"
        >
          Dark
        </a>
      `)
    })

    it('should display as the light style', () => {
      const { getByRole } = render(
        <Button as='a' href='/anchor' variant='light'>Light</Button>
      )

      expect(getByRole('link', { name: /light/i })).toMatchInlineSnapshot(`
        <a
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-dark text-light "
          href="/anchor"
          role="link"
        >
          Light
        </a>
      `)
    })
  })

  describe('when a button', () => {
    it('should render properly', () => {
      const { getByRole } = render(
        <Button>Button</Button>
      )

      expect(getByRole('button', { name: /button/i })).toBeInTheDocument()
    })

    it('should render with children', () => {
      const { getByText } = render(
        <Button>Children</Button>
      )
      const children = getByText(/children/i)

      expect(children).toBeInTheDocument()
    })

    it('should call a handler on click', () => {
      const handler = vi.fn()
      const { getByRole } = render(
        <Button onClick={handler}>Handler</Button>
      )

      fireEvent.click(getByRole('button', { name: /handler/i }))

      expect(handler).toBeCalled()
    })

    it('should display as the accent style', () => {
      const { getByRole } = render(
        <Button>Accent</Button>
      )

      expect(getByRole('button', { name: /accent/i })).toMatchInlineSnapshot(`
        <button
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-secondary text-light "
          role="button"
        >
          Accent
        </button>
      `)
    })

    it('should display as the dark style', () => {
      const { getByRole } = render(
        <Button variant='dark'>Dark</Button>
      )

      expect(getByRole('button', { name: /dark/i })).toMatchInlineSnapshot(`
        <button
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-light text-dark "
          role="button"
        >
          Dark
        </button>
      `)
    })

    it('should display as the light style', () => {
      const { getByRole } = render(
        <Button variant='light'>Light</Button>
      )

      expect(getByRole('button', { name: /light/i })).toMatchInlineSnapshot(`
        <button
          class="cursor-pointer font-bold font-sans inline-block px-12 py-3 relative rounded-md text-2sm uppercase active:top-px hover:bottom-px bg-dark text-light "
          role="button"
        >
          Light
        </button>
      `)
    })
  })
})
